"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

import { EyeSlashFilledIcon } from "@/components/icons/eyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/eyeFilledIcon";
import useToast from "@/hooks/useToast";
import { IUserLogin } from "@/types/User";
import { userLoginSchema } from "@/validations/user.schema";

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { showSuccessToast, showErrorToast } = useToast();

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const formik = useFormik<IUserLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userLoginSchema,
    onSubmit: async (values) => {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (result?.error) {
        showErrorToast(`Erro ao realizar login: ${result.error}`);

        return;
      }

      showSuccessToast("Login realizado com sucesso", "/admin");
    },
  });

  console.log(formik.errors);

  return (
    <main className="py-8 px-4">
      <div className="container mx-auto max-w-5xl flex justify-center items-center">
        <div className="w-full sm:w-3/5 bg-capi_gray_login_darker rounded-3xl  shadow-2xl">
          <div className="text-center bg-capi_gray_login px-2 py-6 rounded-t-3xl mb-14">
            <h2 className="font-headline text-xl font-bold text-white">
              Olá, seja bem-vindo ao CapiTech
            </h2>
          </div>
          <div className=" px-8 md:px-12">
            <p className="text-center text-white">
              Atenção, o login só pode ser realizado por administradores do
              sistema!
            </p>

            <form
              className="my-8 flex flex-col items-center gap-5"
              onSubmit={formik.handleSubmit}
            >
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

              <div className="flex flex-col gap-2">
                <Button
                  className="w-32"
                  color="primary"
                  isLoading={formik.isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
                <Link href="/cadastro">
                  <Button className="w-32" color="success" type="button">
                    Registre-se
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
