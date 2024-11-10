"use client";

import { Image } from "@nextui-org/image";
import { Spinner } from "@nextui-org/spinner";
import React, { useEffect, useState } from "react";

import api from "@/services/axios";
import RenderHtml from "@/components/UI/atoms/renderHtml";

interface ITrailsProps {
  params: {
    id: string;
  };
}

export default function Trails({ params: { id } }: ITrailsProps) {
  const [trail, setTrail] = useState<{
    _id: string;
    name: string;
    subtitle: string;
    description: string;
    video_title: string;
    video_description: string;
    references: string;
    iframe_references?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/trilhas/${id}`);

        if (res.status === 200) {
          setTrail(res.data.data);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    // pageNavigate();
    return (
      <section>
        <div className="container mx-auto max-w-5xl py-8">
          <h4 className="text-xl text-center font-texts font-bold  text-black mb-5">
            {error}
          </h4>
          <p className="text-center text-lg font-semibold">
            Você será redirecionado para a página inicial em instantes!
          </p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section>
        <div className="container mx-auto max-w-5xl py-10">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xl text-center font-texts font-semibold  text-black">
              Carregando
            </h4>
            <Spinner />
          </div>
        </div>
      </section>
    );
  }

  return (
    <main>
      {trail && (
        <>
          <section className="bg-capi_blue_home_darker text-white text-center gap-8 p-8">
            <h2 className="font-headline font-semibold text-4xl">
              {trail.name}
            </h2>
          </section>
          <section className="container mx-auto max-w-5xl p-10 px-2 text-black">
            <div className="w-full flex justify-center items-center mb-5">
              <Image
                radius="none"
                src="/assets/trails/img_trilhas.png"
                width={700}
              />
            </div>

            <h2 className="text-center font-headline text-2xl font-semibold text-black mb-5">
              {trail.subtitle}
            </h2>

            <div className="w-full">
              <RenderHtml htmlContent={trail.description} />
            </div>

            <h3 className="text-center text-xl font-semibold mb-7">
              Para se aprofundar no assunto, temos alguns vídeos como
              recomendação:
            </h3>

            <h3 className="text-lg font-bold text-center mb-5 sm:text-start">
              - {trail.video_title}
            </h3>

            <p className="text-lg mb-8">
              <b>Descrição: </b>
              {trail.video_description}
            </p>

            <a href={trail.references} rel="noreferrer" target="_blank">
              <p className="text-center underline text-blue-700 font-bold transition duration-300 hover:text-blue-800 mb-10">
                {trail.video_title}
              </p>
            </a>

            {/* {trail.iframe_references && ()} */}

            {trail && trail.iframe_references && (
              <div
                className="relative pb-[56.25%] h-0"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  src={trail.iframe_references}
                  title="YouTube Video"
                />
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
