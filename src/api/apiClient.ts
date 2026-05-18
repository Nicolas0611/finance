import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { normalizeError } from "../utils/errors";
import { showApiErrorToast } from "../utils/showApiErrorToast";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // trigger token refresh or redirect
    }

    const appError = normalizeError(error);

    if (!error.config?.skipGlobalErrorToast) {
      showApiErrorToast(appError);
    }

    return Promise.reject(appError);
  },
);

export default apiClient;
