import { Button, InputField } from "@/components";
import { authFormStyles as cls } from "./LoginForm.styles";
import { useForm } from "react-hook-form";
import { useLogin } from "@/features/auth/hooks";
import { Link } from "react-router-dom";

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
    <form className={cls.root} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={cls.title}>Login</h2>
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
      <p className={cls.description}>
        Need to create an account?{" "}
        <Link to="/auth/signup" className={cls.link}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default AuthForm;
