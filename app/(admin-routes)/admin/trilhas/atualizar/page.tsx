"use client";

import { useFormik } from "formik";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { IUpdateTrail } from "@/types/Trail";
import api from "@/services/axios";
import useToast from "@/hooks/useToast";

export default function AdminCreateTrail() {
  const { showSuccessToast, showErrorToast } = useToast();

  const formik = useFormik<IUpdateTrail>({
    initialValues: {
      _id: "",
      name: "",
      description: "",
      references: "",
      subtitle: "",
      video_description: "",
      video_title: "",
      iframe_references: "",
    },
    // validationSchema: userSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await api.post("/trilhas", values);

        if (response.data.success) {
          return showSuccessToast(response.data.message, "/login");
        } else {
          showErrorToast(response.data.message);
        }
      } catch (error: any) {
        showErrorToast(`Erro ao criar usuário.`);
      }
    },
  });

  return (
    <main>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <h2 className="text-center font-headline font-semibold text-2xl">
          Cadastrar nova trilha:
        </h2>
        <form
          className="mt-12 flex flex-col items-center gap-8"
          onSubmit={formik.handleSubmit}
        >
          <Input
            className="text-black"
            color="default"
            errorMessage={formik.touched.name && formik.errors.name}
            isInvalid={formik.touched.name && !!formik.errors.name}
            label="Nome"
            labelPlacement="outside"
            name="name"
            placeholder="Digite o título da Trilha"
            size="lg"
            type="text"
            value={formik.values.name}
            variant="faded"
            onChange={formik.handleChange}
          />
          <Input
            color="default"
            errorMessage={formik.touched.subtitle && formik.errors.subtitle}
            isInvalid={formik.touched.subtitle && !!formik.errors.subtitle}
            label="Tema"
            labelPlacement="outside"
            name="subtitle"
            placeholder="Digite o tema"
            size="lg"
            type="text"
            value={formik.values.subtitle}
            variant="faded"
            onChange={formik.handleChange}
          />
          <Input
            color="default"
            errorMessage={
              formik.touched.description && formik.errors.description
            }
            isInvalid={
              formik.touched.description && !!formik.errors.description
            }
            label="Conteúdo"
            labelPlacement="outside"
            name="description"
            placeholder="Digite o conteúdo"
            size="lg"
            type="text"
            value={formik.values.description}
            variant="faded"
            onChange={formik.handleChange}
          />
          <Input
            color="default"
            errorMessage={
              formik.touched.video_title && formik.errors.video_title
            }
            isInvalid={
              formik.touched.video_title && !!formik.errors.video_title
            }
            label="Título do Vídeo"
            labelPlacement="outside"
            name="video_title"
            placeholder="Digite o título do vídeo"
            size="lg"
            type="text"
            value={formik.values.video_title}
            variant="faded"
            onChange={formik.handleChange}
          />

          <Textarea
            disableAutosize
            classNames={{
              base: "w-full",
              input: "resize-y min-h-[200px]",
            }}
            errorMessage={
              formik.touched.video_description &&
              formik.errors.video_description
            }
            isInvalid={
              formik.touched.video_description &&
              !!formik.errors.video_description
            }
            label="Descrição do Vídeo"
            labelPlacement="outside"
            name="video_description"
            placeholder="Digite a descrição do vídeo"
            value={formik.values.video_description}
            variant="faded"
            onChange={formik.handleChange}
          />

          <Input
            color="default"
            errorMessage={formik.touched.references && formik.errors.references}
            isInvalid={formik.touched.references && !!formik.errors.references}
            label="Referências do Vídeo"
            labelPlacement="outside"
            name="references"
            placeholder="Digite as referências do vídeo"
            size="lg"
            type="text"
            value={formik.values.references}
            variant="faded"
            onChange={formik.handleChange}
          />

          <Input
            color="default"
            errorMessage={
              formik.touched.iframe_references &&
              formik.errors.iframe_references
            }
            isInvalid={
              formik.touched.iframe_references &&
              !!formik.errors.iframe_references
            }
            label="Referências do Iframe"
            labelPlacement="outside"
            name="iframe_references"
            placeholder="Digite as referências do iframe"
            size="lg"
            type="text"
            value={formik.values.iframe_references}
            variant="faded"
            onChange={formik.handleChange}
          />

          <Button color="primary" isLoading={formik.isSubmitting} type="submit">
            Enviar
          </Button>
        </form>
      </section>
    </main>
  );
}
