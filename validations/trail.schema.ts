import { object, ObjectSchema, string } from "yup";

import { IUpdateTrail, ICreateTrail } from "@/types/Trail";

const createTrailSchema: ObjectSchema<ICreateTrail> = object().shape({
  name: string()
    .required("O nome da trilha é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome pode ter no máximo 100 caracteres"),
  description: string()
    .required("A descrição é obrigatória")
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(1000, "A descrição pode ter no máximo 1000 caracteres"),
  video_description: string()
    .required("A descrição do vídeo é obrigatória")
    .min(10, "A descrição do vídeo deve ter pelo menos 10 caracteres")
    .max(500, "A descrição do vídeo pode ter no máximo 500 caracteres"),
  references: string()
    .required("As referências são obrigatórias")
    .min(3, "As referências devem ter pelo menos 3 caracteres"),
  subtitle: string()
    .required("O subtítulo é obrigatório")
    .min(3, "O subtítulo deve ter pelo menos 3 caracteres")
    .max(200, "O subtítulo pode ter no máximo 200 caracteres"),
  video_title: string()
    .required("O título do vídeo é obrigatório")
    .min(3, "O título do vídeo deve ter pelo menos 3 caracteres")
    .max(100, "O título do vídeo pode ter no máximo 100 caracteres"),
  iframe_references: string()
    .required("As referências do iframe são obrigatórias")
    .min(3, "As referências do iframe devem ter pelo menos 3 caracteres"),
});

const updateTrailSchema: ObjectSchema<IUpdateTrail> = object().shape({
  _id: string().required("O ID da trilha é obrigatório"),
  name: string()
    .required("O nome da trilha é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome pode ter no máximo 100 caracteres"),
  description: string()
    .required("A descrição é obrigatória")
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(1000, "A descrição pode ter no máximo 1000 caracteres"),
  video_description: string()
    .required("A descrição do vídeo é obrigatória")
    .min(10, "A descrição do vídeo deve ter pelo menos 10 caracteres")
    .max(500, "A descrição do vídeo pode ter no máximo 500 caracteres"),
  references: string()
    .required("As referências são obrigatórias")
    .min(3, "As referências devem ter pelo menos 3 caracteres"),
  subtitle: string()
    .required("O subtítulo é obrigatório")
    .min(3, "O subtítulo deve ter pelo menos 3 caracteres")
    .max(200, "O subtítulo pode ter no máximo 200 caracteres"),
  video_title: string()
    .required("O título do vídeo é obrigatório")
    .min(3, "O título do vídeo deve ter pelo menos 3 caracteres")
    .max(100, "O título do vídeo pode ter no máximo 100 caracteres"),
  iframe_references: string()
    .optional()
    .min(3, "As referências do iframe devem ter pelo menos 3 caracteres"),
});

export { createTrailSchema, updateTrailSchema };
