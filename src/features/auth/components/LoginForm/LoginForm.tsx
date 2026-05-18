import { Button, InputField } from "@/components";
import { useForm } from "react-hook-form";
import { useAuth } from "@/features/auth/hooks";
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

  const { login } = useAuth();

  const onSubmit = (data: LoginFormData) => {
    if (!isValid) return;
    login.mutate(data);
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
        disabled={login.isPending}
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
      <Button type="submit" disabled={login.isPending || !isValid}>
        Login
      </Button>
    </AuthWrapper>
  );
};

export default AuthForm;
