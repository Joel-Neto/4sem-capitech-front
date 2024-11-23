"use client";

import React from "react";
import Image from "next/image";

const Sobre = () => {
  const contents = [
    {
      title: "Sobre o nosso projeto",
      img01: "/assets/about/img_about02.png",
      img02: "/assets/about/img_about03.png",
      text: "O projeto em foco visa desenvolver um site educacional gratuito com ênfase em tecnologia, utilizando ferramentas como Visual Studio Code, HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, React Icons, Flaticon, Figma, Insomnia, Postman. A plataforma abrangente é estruturada em três componentes cruciais. Inicialmente, apresenta brevemente a FATEC, proporcionando aos usuários um entendimento inicial sobre a instituição. Em seguida, realiza uma análise detalhada do curso e do contexto mais amplo da área de tecnologia. A parte central do site é dedicada à disponibilização de conteúdo educacional, oferecendo aos usuários acesso a uma variedade de materiais, como vídeos aulas, links úteis e sugestões de cursos adicionais. Essa seção não apenas fornece informações, mas também cria um ambiente de aprendizado envolvente e acessível. Uma característica distintiva do projeto é a facilidade de navegação e a capacidade dos usuários melhorarem seu desempenho nos estudos. Essa abordagem visa tornar o aprendizado mais acessível e personalizado, incentivando os usuários a explorarem e se aprimorarem na área de tecnologia.",
    },
    {
      title: "Sobre o nosso curso",
      img01: "/assets/about/img_about04.png",
      img02: "/assets/about/img_about05.png",
      text: "O currículo do Curso Superior de Tecnologia Desenvolvimento de Software Multiplataforma do eixo tecnológico Informação e Comunicação oferece disciplinas como Matemática para Computação, Álgebra Linear, Redação Técnica e Ética Profissional e Patente, Metodologias Ágeis para Gestão de Projetos de Software, Inglês, além de conhecimentos mais específicos da área como: Algoritmo e Lógica de Programação, Programação para Desktop, Programação para Dispositivos Móveis, Programação para Web, Experiência do Usuário, Computação em Nuvem, Inteligência Artificial, Segurança da Informação, Internet das Coisas, Banco de Dados e Engenharia de Software. O conteúdo do curso prepara os alunos para desenvolver software para diversas plataformas, tais como Web, Desktop, Móvel, em Nuvem Internet das Coisas, empregando conceitos de Segurança da Informação e Inteligência Artificial, além de integração e entrega contínua de software, visando desenvolver soluções de software que atendam os critérios de qualidade exigidos pelo mercado.",
    },
  ];

  return (
    <div>
      <section className="relative bg-capi_seaGreen_about text-white flex items-center justify-center gap-8 p-8">
        <Image
          alt="Ícone de contato."
          className="hidden absolute left-28 w-16 sm:block"
          src="/assets/about/img_about01.png"
          width={64}
          height={64}
        />
        <h2 className="font-headline font-semibold text-white text-4xl">
          Sobre nós
        </h2>
      </section>

      <section className="container flex flex-col items-center justify-center mx-auto max-w-7xl p-8">
        {contents.map((content, index) => (
          <div
            key={index}
            className="w-full bg-capi_seaGreen_about py-6 px-8 shadow-gray-300 shadow-lg rounded-xl mb-5 md:w-4/6"
          >
            <h3 className="text-center font-headline font-bold text-xl mb-5">
              <div className="flex items-center justify-around gap-5 bg-capi_seaGreen_about_light p-5 rounded-lg shadow-lg mb-5">
                {/* Imagens ao lado do título */}
                <Image
                  src={content.img01}
                  alt="Imagem sobre o projeto"
                  width={80}
                  height={80}
                  className="rounded-full hidden sm:block"
                />
                <span>{content.title}</span>
                <Image
                  src={content.img02}
                  alt="Imagem adicional"
                  width={80}
                  height={80}
                  className="rounded-full hidden sm:block"
                />
              </div>
            </h3>
            {/* Texto abaixo das imagens */}
            <p className="text-justify font-texts text-lg">{content.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sobre;
