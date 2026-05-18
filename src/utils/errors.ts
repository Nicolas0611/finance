import axios from 'axios';

export interface AppError {
  message: string;
  status?: number;
  code?: string;
}

export const isAppError = (error: unknown): error is AppError =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof (error as AppError).message === 'string'

export const getErrorMessage = (error: unknown): string => {
  if (isAppError(error)) return error.message
  if (error instanceof Error) return error.message
  return 'An unexpected error occurred'
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
