import { AuthLayout } from "@/features/auth/layouts";

import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default PublicLayout;
