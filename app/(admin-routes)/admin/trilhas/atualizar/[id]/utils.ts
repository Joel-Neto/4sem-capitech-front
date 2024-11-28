import api from "@/services/axios";
import { IGetTrail } from "@/types/Trail";

const getTrail = async (trailId: string) => {
  try {
    const result = await api.get<IGetTrail>(`/trilhas/${trailId}`);

    return result.data.data;
  } catch (error) {
    console.log("Erro ao buscar trilha");
  }
};

export { getTrail };
