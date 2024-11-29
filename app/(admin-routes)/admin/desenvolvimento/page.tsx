"use client";

import React, { useState } from "react";

import RenderHtml from "@/components/UI/atoms/renderHtml";

export default function AdminDevelopment() {
  const [htmlCode, setHtmlCode] = useState("");

  return (
    <main className="py-8 px-4">
      <div className="container max-w-5xl mx-auto mb-5">
        <form>
          <div className="flex flex-col gap-5 mb-5">
            <label className="text-lg font-headline" htmlFor="htmlTextarea">
              Insira seu código aqui!
            </label>
            <textarea
              className="w-full border border-black text-white bg-capi_gray_development shadow-xl py-3 px-3 rounded-md min-h-80"
              id="htmlTextarea"
              value={htmlCode}
              onChange={(ev) => setHtmlCode(ev.target.value)}
            />
          </div>
        </form>
      </div>

      <hr className="mb-10" />

      <section className="px-4">
        <div className="container max-w-5xl mx-auto">
          <h3 className="text-black text-center mb-2 font-semibold">
            Código Renderizado
          </h3>
          <RenderHtml htmlContent={htmlCode} />
        </div>
      </section>
    </main>
  );
}
