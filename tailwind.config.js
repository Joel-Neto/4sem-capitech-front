import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        capi_purple: "#304076",
        capi_yellow: "#EDB604",
        capi_green: "#63C770",
        capi_blue: "#1EA0D1",
        capi_red: "#FB3535",
        capi_blue_home: "#5DA6DB",
        capi_blue_home_darker: "#5190bd",
        capi_gray_home: "#e5e7eb",
        capi_gray_home_darker: "#4b5563",
        capi_gray_login: "#838183",
        capi_gray_login_darker: "#1d1c1d",
        capi_gray_contact: "#3E3E3E",
        capi_seaGreen_about: "#04D9B3",
        capi_seaGreen_about_light: "#0EFFE2",
        capi_gray_development: "#2d2d2d",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            // foreground: "#FFFFFF",
            danger: "#FB3535",
          },
        },
      },
    }),
  ],
};
