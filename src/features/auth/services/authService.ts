import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
export const health = async (): Promise<string> => {
  const { data } = await apiClient.get(ENDPOINTS.health);
  return data;
};

export const authService = {
  health,
};
