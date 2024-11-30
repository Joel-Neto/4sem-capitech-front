import { object, ObjectSchema, string } from "yup";

import { IUpdateUser, IUser, IUserLogin } from "@/types/User";

const userSchema: ObjectSchema<IUser> = object().shape({
  name: string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres"),
  email: string()
    .email("O email deve ser um email válido")
    .required("O email é obrigatório"),
  password: string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha pode ter no máximo 20 caracteres"),
  adminCode: string().required(),
});

const userLoginSchema: ObjectSchema<IUserLogin> = object().shape({
  email: string()
    .email("O email deve ser um email válido")
    .required("O email é obrigatório"),
  password: string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha pode ter no máximo 20 caracteres"),
});

const updateUserSchema: ObjectSchema<IUpdateUser> = object().shape({
  name: string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres"),
  email: string()
    .email("O email deve ser um email válido")
    .required("O email é obrigatório"),
  password: string()
    .optional()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha pode ter no máximo 20 caracteres"),
});

export { userSchema, userLoginSchema, updateUserSchema };
