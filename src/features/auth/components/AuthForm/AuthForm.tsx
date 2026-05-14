import { Button, InputField } from "@/components";
import { authFormStyles as cls } from "./AuthForm.styles";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({});

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form className={cls.root} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-preset-1 font-bold text-foreground">Login</h2>
      <InputField type="email" placeholder="Email" {...register("email")} />
      <InputField
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default AuthForm;
