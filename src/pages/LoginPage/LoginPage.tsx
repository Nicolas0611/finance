import { InputSelect } from "@/components";
import { AuthImage } from "@/features/auth/components";
import { loginPageStyles as cls } from "./LoginPage.styles";

const LoginPage = () => {
  return (
    <div className={cls.root}>
      <AuthImage />
      <div className={cls.form}>
        <p className="text-preset-6 text-secondary">Login Page.</p>
        <InputSelect
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
        />
      </div>
    </div>
  );
};

export default LoginPage;
