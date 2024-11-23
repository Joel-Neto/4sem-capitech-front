"use client";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

export default function AdminBreadcrumb() {
  const path = usePathname();

  const links = [
    {
      link: "/admin",
      text: "Trilhas",
    },
    {
      link: "/admin/trilhas/novatrilha",
      text: "Nova trilha",
    },
    {
      link: "/admin/desenvolvimento",
      text: "Área de desenvolvimento",
    },
    {
      link: "/admin/usuario",
      text: "Usuário",
    },
  ];

  return (
    <div className="py-5 flex flex-col items-center justify-center gap-5 font-headline font-semibold text-md border-b-2 sm:flex-row">
      {links.map((value, i) => (
        <Link
          key={`key-${i}`}
          href={value.link}
          className={`${path === value.link ? "underline font-bold" : ""} text-black`}
        >
          {value.text}
        </Link>
      ))}
    </div>
  );
}
