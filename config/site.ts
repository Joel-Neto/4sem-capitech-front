export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CapiTech",
  description: "Aprendendo com quem aprende.",
  menuItems: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Fatec Votorantim",
      href: "/vestibular",
    },
    {
      text: "Contato",
      href: "/contato",
    },
    {
      text: "Sobre",
      href: "/sobre",
    },
    {
      text: "Login (Admin)",
      href: "/login",
    },
    {
      text: "Cadastro (Admin)",
      href: "/cadastro",
    },
  ],
  footerItems: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Fatec Votorantim",
      href: "/vestibular",
    },
    {
      text: "Contato",
      href: "/contato",
    },
    {
      text: "Sobre",
      href: "/sobre",
    },
  ],
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
