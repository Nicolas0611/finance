import { useLogin } from "./useAuthMutations";

const useAuth = () => {
  const loginMutation = useLogin();

  return {
    login: loginMutation,
  };
};

export default useAuth;
