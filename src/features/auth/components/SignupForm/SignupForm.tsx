import { useForm } from "react-hook-form";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import { Button, InputField } from "@/components";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignupFormData>({});

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <AuthWrapper
      title="Signup"
      onSubmit={handleSubmit(onSubmit)}
      link={{
        title: "Already have an account?",
        text: "Login",
        to: "/auth/login",
      }}
    >
      <InputField
        placeholder="Enter your name"
        {...register("name", { required: true })}
      />
      <InputField
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true })}
      />
      <InputField
        type="password"
        placeholder="Enter your password"
        {...register("password", { required: true })}
      />
      <Button type="submit" disabled={!isValid}>
        Signup
      </Button>
    </AuthWrapper>
  );
};

export default SignupForm;
