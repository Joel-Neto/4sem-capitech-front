"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

export default function AdminDevelopment() {
  const [htmlCode, setHtmlCode] = useState("");
  const [renderedHtml, setRenderedHtml] = useState("");

  const handleHtmlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHtmlCode(event.target.value);
  };

  const handleHtmlSubmit = () => {
    setRenderedHtml(htmlCode);
  };

  return (
    <main className="py-8 px-4">
      <div className="container mx-auto max-w-5xl flex justify-center items-center">
        <div className="w-full sm:w-3/5 bg-capi_gray_development rounded-3xl shadow-2xl">
          <div className="text-center bg-capi_gray_development_dark px-2 py-6 rounded-t-3xl mb-14">
            <h2 className="font-headline text-xl font-bold text-white">
              Insira seu código HTML
            </h2>
          </div>
          <div className="px-8 md:px-12">
            <form
              className="my-8 flex flex-col items-center gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleHtmlSubmit();
              }}
            >
              <Input
                className="text-black"
                color="default"
                label="Código HTML"
                name="htmlCode"
                type="text"
                value={htmlCode}
                variant="faded"
                onChange={handleHtmlChange}
                aria-label="Código HTML"
              />
              <div className="flex flex-col gap-5">
                <Button
                  className="w-32"
                  color="primary"
                  onClick={handleHtmlSubmit}
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />
      
      <section className="px-4">
        <div className="container max-w-5xl mx-auto">
          <h3 className="text-white text-center">Código Renderizado</h3>
          <div
            className="rendered-html bg-white p-5 rounded-md shadow-md"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </section>
    </main>
  );
}
