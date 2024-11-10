import { Link } from "@nextui-org/link";
import React from "react";
import { IoClose } from "react-icons/io5";

import { siteConfig } from "@/config/site";

interface IHeaderModal {
  showAndCloseModal: () => void;
}

export default function HeaderModal({ showAndCloseModal }: IHeaderModal) {
  return (
    <div className="absolute z-['9999'] top-0 left-0 bg-black w-64  rounded-e-xl">
      <div className="relative w-full h-full rounded-e-xl py-10 px-5">
        <button className="absolute right-4 top-4" onClick={showAndCloseModal}>
          <IoClose className="pointer-events-none" size={25} />
        </button>

        <ul className="flex flex-col gap-2 text-md">
          {siteConfig.menuItems.map((link, i) => (
            <li key={`link-${i}`}>
              <Link aria-busy href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
