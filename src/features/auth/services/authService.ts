import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
import type { LoginPayload, LoginResponse } from "@/features/auth/types/models";
import type { LoginResponseDTO } from "@/features/auth/types/dto";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const {
    data: { data },
  } = await apiClient.post<{ data: LoginResponseDTO }>(
    ENDPOINTS.auth.login,
    payload,
  );
  return data;
};

export const authService = {
  login,
};
