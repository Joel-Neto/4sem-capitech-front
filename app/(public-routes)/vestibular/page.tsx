import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function Vestibular() {
  return (
    <main>
      <section className="relative bg-capi_yellow flex items-center justify-center gap-8 p-8">
        <img
          alt="Ícone de contato."
          className="hidden absolute left-28 w-16 sm:block"
          src="/assets/vestibular/vestibularIcon.png"
        />
        <h2 className="font-headline font-semibold text-white text-4xl">
          Vestibular FATEC
        </h2>
      </section>

      <section className="container mx-auto max-w-5xl p-10 px-4">
        <h3 className="text-center font-headline font-bold text-2xl mb-5">
          Siga seu sonho e entre em uma faculdade GRÁTIS!
        </h3>

        <h4 className="text-center font-headline text-md mb-5 sm:text-lg">
          Aqui damos algumas dicas do vestibular e ajudamos na prova.
        </h4>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-4/6">
            <Image
              alt="Imagem Fatec Votorantim no estado de São Paulo."
              className="w-full"
              src="/assets/vestibular/fatec_img.png"
              width={500}
              height={300}
            />
          </div>

          <div className="basis-4/6">
            <div className="flex flex-col items-center justify-center h-full">
              <h5 className="text-center text-lg font-texts font-bold">
                Votorantim
              </h5>

              <div className="text-justify text-md sm:text-left sm:text-lg border bg-zinc-200 px-10 py-7 rounded-3xl mt-2">
                <p>
                  A Faculdade de Tecnologia (Fatec) chegou na cidade de
                  Votorantim em dezembro de 2022, sendo a primeira unidade da
                  instituição no município. Ela está localizada na Avenida
                  Juscelino Kubitschek de Oliveira, 279, na Vila Protestantes.
                </p>
                <div className="mt-2">
                  <p>Atualmente, a unidade oferece três cursos:</p>
                  <li>
                    <Link
                      href="https://fatecvotorantim.cps.sp.gov.br/desenvolvimento-de-software-multiplataforma/"
                      target="_blank"
                    >
                      Desenvolvimento de Software Multiplataforma
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fatecvotorantim.cps.sp.gov.br/controle-de-obras/"
                      target="_blank"
                    >
                      Controle de Obras
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fatecvotorantim.cps.sp.gov.br/ciencia-de-dados-para-negocios/"
                      target="_blank"
                    >
                      Ciencia de Dados para Negócios
                    </Link>
                  </li>

                  <p>A inauguração está prevista para dezembro deste ano.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-evenly items-center gap-8 md:flex-row">
          <Button
            className="bg-red-600 text-white font-bold"
            href="https://www.cps.sp.gov.br/fatec/vestibular/"
            as={Link}
            target="_blank"
          >
            Inscreva-se no Vestibular FATEC!
          </Button>
        </div>
      </section>
    </main>
  );
}
