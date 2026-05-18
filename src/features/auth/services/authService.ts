import apiClient from "@/api/apiClient";
import { ENDPOINTS } from "@/api/endpoints";
import type {
  LoginPayload,
  SignupPayload,
  LoginResponse,
  SignupResponse,
} from "@/features/auth/types/models";
import type { AuthResponseDTO } from "@/features/auth/types/dto";

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const {
    data: { data },
  } = await apiClient.post<{ data: AuthResponseDTO }>(
    ENDPOINTS.auth.login,
    payload,
  );
  return data;
};

const signup = async (payload: SignupPayload): Promise<SignupResponse> => {
  const {
    data: { data },
  } = await apiClient.post<{ data: AuthResponseDTO }>(
    ENDPOINTS.auth.register,
    payload,
  );
  return data;
};

export const authService = {
  login,
  signup,
};
