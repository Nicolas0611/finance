import { AuthImage } from "@/features/auth/components";
import { authLayoutStyles as cls } from "./AuthLayout.styles";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={cls.root}>
      <AuthImage />
      <div className={cls.form}>{children}</div>
    </div>
  );
};

export default AuthLayout;
