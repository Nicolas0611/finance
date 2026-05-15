import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useLogin = () => {
  const [, setToken] = useLocalStorage<string | null>("access_token", null);

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.token);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
