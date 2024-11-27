"use client";

import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import useToast from "@/hooks/useToast";
import api from "@/services/axios";
import { IEditUser } from "@/types/User";
import { EyeSlashFilledIcon } from "@/components/icons/eyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/eyeFilledIcon";

export default function AdminProfilePage() {
  const { data } = useSession();

  const { showSuccessToast, showErrorToast } = useToast();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const formik = useFormik<Partial<IEditUser>>({
    initialValues: {
      _id: "",
      email: "",
      name: "",
      password: "",
    },
    // validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const { _id, ...userData } = values;

        if (userData.password === "") {
          delete userData.password;
        }

        const response = await api.put(`/user/${_id}`, userData);

        if (response.data.success) {
          signOut();

          return showSuccessToast(
            `${response.data.message}! Faça login novamente.`
          );
        } else {
          showErrorToast(response.data.message);
        }
      } catch (error: any) {
        return showErrorToast(`Erro ao atualizar usuário.`);
      }
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        _id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        password: "",
      });
    }
  }, [data]);

  return (
    <main>
      <section className="container mx-auto max-w-5xl p-10 px-10">
        <h2 className="text-center font-headline font-semibold text-2xl">
          Atualizar Usuário:
        </h2>
        <p className="text-center font-headline font-semibold text-lg">
          Nome e E-mail são obrigatórios!
        </p>
        <form
          className="mt-12 flex flex-col items-center gap-8"
          onSubmit={formik.handleSubmit}
        >
          <Input
            isRequired
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
            isRequired
            color="default"
            errorMessage={formik.touched.email && formik.errors.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
            label="Tema"
            labelPlacement="outside"
            name="email"
            placeholder="Digite o tema"
            size="lg"
            type="text"
            value={formik.values.email}
            variant="faded"
            onChange={formik.handleChange}
          />
          <Input
            color="default"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            errorMessage={formik.touched.password && formik.errors.password}
            isInvalid={formik.touched.password && !!formik.errors.password}
            label="Nova Senha (Caso queira manter a atual, deixe o campo vazio!)"
            labelPlacement="outside"
            name="password"
            placeholder="Digite a senha"
            size="lg"
            type={isPasswordVisible ? "text" : "password"}
            value={formik.values.password}
            variant="faded"
            onChange={formik.handleChange}
          />

          <div className="text-center">
            <Button
              isLoading={formik.isSubmitting}
              color="primary"
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
