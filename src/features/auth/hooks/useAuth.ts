import { useLogin, useSignup } from "./useAuthMutations";

const useAuth = () => {
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  return {
    login: loginMutation,
    signup: signupMutation,
  };
};

export default useAuth;
