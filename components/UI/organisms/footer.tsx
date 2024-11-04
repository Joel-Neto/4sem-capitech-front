import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";

import { siteConfig, SiteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-capi_purple p-5">
      <div className="container mx-auto max-w-5xl text-white mb-3">
        <div className="flex items-center justify-center ">
          <h4 className="font-headline text-3xl font-bold">Capi</h4>
          <Image height={65} src="/assets/logo.png" width={48} />
          <h4 className="font-headline text-3xl font-bold">Tech</h4>
        </div>
      </div>
      <div className="text-center">
        <ul className="flex flex-col gap-2 text-sm">
          {siteConfig.footerItems.map((link, i) => (
            <li key={`link-${i}`}>
              <Link className="menuLinks" color="foreground" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
