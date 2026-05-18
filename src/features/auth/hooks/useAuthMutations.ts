import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService";
import { useAuth } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTE } from "@/routes/PrivateRoutes";

export const useLogin = () => {
  const { login: loginFn, logout: logoutFn } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      loginFn(data.token);
      navigate(PRIVATE_ROUTE.OVERVIEW);
    },
    onError: (error) => {
      console.error(error);
      logoutFn();
    },
  });
};
