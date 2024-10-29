"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Image } from "@nextui-org/image";

import HeaderModal from "../molecules/headerModal";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const showAndCloseModal = () => {
    setModalOpen((previousValue) => !previousValue);
  };

  return (
    <header className="relative bg-capi_purple min-h-64 py-5 px-4 text-white">
      <Button
        isIconOnly
        aria-label="Menu"
        color="default"
        onPress={showAndCloseModal}
      >
        <IoMenu size={20} />
      </Button>
      <div className="container flex flex-col items-center justify-center mx-auto max-w-4xl">
        <Link href="/">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-headline text-4xl font-bold sm:text-6xl">
              Capi
            </h1>
            <Image
              className="z-0"
              height={110}
              src="/assets/logo.png"
              width={85}
            />
            <h1 className="font-headline text-4xl font-bold sm:text-6xl">
              Tech
            </h1>
          </div>
        </Link>

        <h2 className="font-headline text-center text-2xl font-bold">
          Aprendendo com <br /> quem aprende!
        </h2>
      </div>

      {modalOpen && <HeaderModal showAndCloseModal={showAndCloseModal} />}
    </header>
  );
}
