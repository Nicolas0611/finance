import axios from 'axios';

export interface AppError {
  message: string;
  status?: number;
  code?: string;
}

export const normalizeError = (error: unknown): AppError => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message ?? error.message,
      status:  error.response?.status,
      code:    error.response?.data?.code,
    };
  }
  if (error instanceof Error) return { message: error.message };
  return { message: 'An unexpected error occurred' };
};
