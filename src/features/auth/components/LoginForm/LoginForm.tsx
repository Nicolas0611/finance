import { Button, InputField } from "@/components";
import { authFormStyles as cls } from "./LoginForm.styles";
import { useForm } from "react-hook-form";
import { useLogin } from "@/features/auth/hooks";
import { Link } from "react-router-dom";
import { AuthWrapper } from "@/features/auth/components";

interface LoginFormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormData>({});

  const { mutate, isPending } = useLogin();
  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <AuthWrapper
      title="Login"
      onSubmit={handleSubmit(onSubmit)}
      link={{
        title: "Need to create an account?",
        text: "Sign Up",
        to: "/auth/signup",
      }}
    >
      <InputField
        disabled={isPending}
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <InputField
        showIcon
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <Button type="submit" disabled={isPending || !isValid}>
        Login
      </Button>
    </AuthWrapper>
  );
};

export default AuthForm;
