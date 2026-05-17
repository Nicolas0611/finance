import { AuthImage } from "@/features/auth/components";
import { authLayoutStyles as cls } from "./AuthLayout.styles";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className={cls.root}>
      <AuthImage />
      <div className={cls.form}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
