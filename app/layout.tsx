import Footer from "@/components/UI/organisms/footer";
import Header from "@/components/UI/organisms/header";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

// import HotjarSnippet from "@/components/hotjar/hotjarComponent";
import Hotjar from "@hotjar/browser";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// Substitua 'YOUR_HOTJAR_ID' e 'YOUR_HOTJAR_VERSION' pelos valores fornecidos pela sua conta do Hotjar
const HOTJAR_ID = 5234029;
const HOTJAR_VERSION = 6;

// Inicializa o Hotjar
Hotjar.init(HOTJAR_ID, HOTJAR_VERSION);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Header />
            <main className=" flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>

        {/* <HotjarSnippet /> */}
      </body>
    </html>
  );
}
