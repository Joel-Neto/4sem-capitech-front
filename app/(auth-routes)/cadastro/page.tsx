"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import React, { useState } from "react";

import { EyeSlashFilledIcon } from "@/components/icons/eyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/eyeFilledIcon";
import { IUser } from "@/types/User";
import { userSchema } from "@/validations/user.schema";
import api from "@/services/axios";
import useToast from "@/hooks/useToast";

export default function Register() {
  const { showSuccessToast, showErrorToast } = useToast();

  const formik = useFormik<IUser>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      adminCode: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const response = await api.post("/cadastro", values);

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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const toggleCodeVisibility = () => setIsCodeVisible(!isCodeVisible);

  return (
    <main className="py-8 px-4">
      <div className="container mx-auto max-w-5xl flex justify-center items-center">
        <div className="w-full sm:w-3/5 bg-capi_gray_login_darker rounded-3xl shadow-2xl">
          <div className="text-center bg-capi_gray_login px-2 py-6 rounded-t-3xl mb-14">
            <h2 className="font-headline text-xl font-bold text-white">
              Olá, seja bem-vindo ao CapiTech
            </h2>
          </div>
          <div className="px-8 md:px-12">
            <p className="text-center text-white">
              Atenção, o login só pode ser realizado por administradores do
              sistema!
            </p>

            <form
              className="my-8 flex flex-col items-center gap-5"
              onSubmit={formik.handleSubmit}
            >
              <Input
                className="text-black"
                color="default"
                errorMessage={formik.touched.name && formik.errors.name}
                isInvalid={formik.touched.name && !!formik.errors.name}
                label="Nome"
                name="name"
                type="text"
                value={formik.values.name}
                variant="faded"
                onChange={formik.handleChange}
              />
              <Input
                color="default"
                errorMessage={formik.touched.email && formik.errors.email}
                isInvalid={formik.touched.email && !!formik.errors.email}
                label="E-mail"
                name="email"
                type="email"
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
                label="Senha"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                value={formik.values.password}
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
                    onClick={toggleCodeVisibility}
                  >
                    {isCodeVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                errorMessage={
                  formik.touched.adminCode && formik.errors.adminCode
                }
                isInvalid={
                  formik.touched.adminCode && !!formik.errors.adminCode
                }
                label="Código de Admin."
                name="adminCode"
                type={isCodeVisible ? "text" : "password"}
                value={formik.values.adminCode}
                variant="faded"
                onChange={formik.handleChange}
              />
              <div className="flex flex-col gap-5">
                <Button
                  className="w-32"
                  color="primary"
                  isDisabled={formik.isSubmitting}
                  isLoading={formik.isSubmitting}
                  type="submit"
                >
                  Registre-se
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
