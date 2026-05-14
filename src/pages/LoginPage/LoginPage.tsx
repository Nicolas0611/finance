import { AuthForm, AuthImage } from "@/features/auth/components";
import { loginPageStyles as cls } from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <div className={cls.root}>
      <AuthImage />
      <div className={cls.form}>
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
