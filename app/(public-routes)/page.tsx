"use client";

import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";

import HomeCardContent from "@/components/UI/molecules/homeCardContent";
import HomeCardFrames from "@/components/UI/molecules/homeCardFrame";
import api from "@/services/axios";
import { HomeTrailImage } from "@/components/UI/atoms/homeTrailImage";

export default function Home() {
  const [trails, setTrails] = useState<
    {
      _id: string;
      name: string;
      subtitle: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/trilhas");

        if (res.status === 200) {
          setTrails(res.data.data);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const homeFrames = [
    {
      img: "/assets/home/academico.png",
      title: "Trilhas de aprendizagem",
      content:
        "Conheça nossas trilhas de aprendizagem e acompanhem novos conteudos.",
      color: "bg-capi_green",
    },
    {
      img: "/assets/home/chat-de-video.png",
      title: "Seu Desenvolvimento",
      content:
        "Conheça nossas trilhas de aprendizagem e acompanhem novos conteudos.",
      color: "bg-capi_blue",
    },
    {
      img: "/assets/home/trilha.png",
      title: "Vestibular FATEC",
      content:
        "Conheça as oportunidades de estudar de graça, com professores especializados.",
      color: "bg-capi_red",
    },
  ];

  const homeContents = [
    {
      img: "/assets/home/home_img1.png",
      title: "Qual tecnologia você quer trilhar?",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Com nossos recursos e suporte, você terá as ferramentas necessárias para desenvolver suas habilidades e se tornar um profissional de TI. Nosso programa é estruturado para atender tanto iniciantes quanto aqueles que já possuem algum conhecimento na área, proporcionando um caminho claro e eficaz para alcançar seus objetivos na carreira de tecnologia da informação.",
      rowReverse: false,
      bgColor: "bg-capi_gray_home",
    },
    {
      img: "/assets/home/home_img2.png",
      title: "O lugar certo para aprender programação e testar conhecimentos.",
      content:
        "Tenha o ambiente de faculdade de onde estiver, é um ambiente propício para a criação de redes de contatos e conexões profissionais.",
      rowReverse: true,
      bgColor: "bg-capi_gray_home",
    },
    {
      img: "/assets/home/home_img3.png",
      title: "Aprendendo com quem aprende.",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Através da distribuição estratégica de tarefas e responsabilidades, você poderá focar em áreas específicas, otimizando seu tempo e esforço. Além disso, nossa plataforma permite que você esclareça dúvidas e receba ajuda colaborativa, o que acelera significativamente o processo de aprendizagem.",
      rowReverse: false,
      bgColor: "bg-capi_blue_home_darker",
    },
    {
      img: "/assets/home/home_img4.png",
      title: "Aprendizado Guiado Colaboratiovo.",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Através da distribuição estratégica de tarefas e responsabilidades, você poderá focar em áreas específicas, otimizando seu tempo e esforço. Além disso, nossa plataforma permite que você esclareça dúvidas e receba ajuda colaborativa, o que acelera significativamente o processo de aprendizagem.",
      rowReverse: true,
      bgColor: "bg-capi_blue_home_darker",
    },
    {
      img: "/assets/home/home_img5.png",
      title: "Sobre a FATEC.",
      content:
        "A Faculdade de Tecnologia (FATEC) é uma instituição pública de ensino superior no Brasil, conhecida pela excelência na formação de profissionais nas áreas de tecnologia e inovação. Com unidades espalhadas pelo estado de São Paulo, a FATEC oferece cursos de graduação tecnológica que combinam teoria e prática, preparando os alunos para os desafios do mercado de trabalho. Sua infraestrutura moderna, professores qualificados e forte conexão com o setor industrial fazem dela uma referência em educação tecnológica no país.",
      rowReverse: false,
      bgColor: "bg-capi_gray_home",
    },
    {
      img: "/assets/home/home_img6.png",
      title: "Curso de Desenvolvimento de Software Multiplataforma",
      content:
        "O curso de Desenvolvimento de Software Multiplataforma da FATEC é ideal para quem deseja ingressar no mundo da tecnologia da informação. Capacitando os alunos a desenvolver aplicativos e sistemas para diversas plataformas, como web, mobile e desktop, o curso oferece uma grade curricular abrangente. Disciplinas como programação, engenharia de software e banco de dados equipam os estudantes com as habilidades necessárias para criar soluções tecnológicas inovadoras e eficientes. O curso também enfatiza metodologias ágeis e práticas colaborativas, preparando os futuros profissionais para atuarem em equipes multidisciplinares.",
      rowReverse: true,
      bgColor: "bg-capi_gray_home",
    },
  ];

  return (
    <>
      <main className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-4 px-6 py-8 md:py-10">
        <section className="flex flex-col gap-7 md:flex-row mb-10">
          {homeFrames.map((frame, i) => (
            <HomeCardFrames
              key={`frame-${i}`}
              color={frame.color}
              content={frame.content}
              img={frame.img}
              title={frame.title}
            />
          ))}
        </section>
        <section className="flex flex-col gap-10">
          {homeContents.map((content, i) => (
            <HomeCardContent
              key={i}
              bgColor={content.bgColor}
              content={content.content}
              flexRowReverse={content.rowReverse}
              img={content.img}
              title={content.title}
            />
          ))}
        </section>

        <div className="mt-10 mb-8 flex justify-center items-center">
          <Button
            as={Link}
            className="text-white"
            color="danger"
            href="/vestibular"
          >
            <span>Conheça a FATEC</span>
            <FaArrowRight />
          </Button>
        </div>
      </main>
      <section className="bg-capi_gray_home_darker w-full px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-headline text-black text-2xl font-semibold text-center mb-8">
            Escolha uma tecnologia para começar sua jornada!
          </h2>

          {error ? (
            <p className="text-center">Erro ao carregar trilhas: {error}</p>
          ) : loading ? (
            <div className="w-full flex gap-2 items-center justify-center">
              <p>Carregando trilhas</p>
              <Spinner color="white" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {trails.map((trail) => (
                <Card key={trail._id}>
                  <CardBody className="overflow-visible py-2 flex flex-col justify-between items-center bg-capi_gray_login p-5">
                    <HomeTrailImage trailName={trail.name} />
                    <div className="text-center">
                      <p className="text-3xl font-headline text-white font-bold transition duration-300 mb-2 hover:text-gray-200">
                        {trail.name}
                      </p>
                      <Link href={`trilhas/${trail._id}`}>
                        <p className="text-center text-xl font-headline text-white font-bold underline transition duration-300 hover:text-gray-200">
                          {trail.subtitle}
                        </p>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
