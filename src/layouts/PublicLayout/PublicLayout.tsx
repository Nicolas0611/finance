import { AuthLayout } from "@/features/auth/layouts";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
  }, [isAuthenticated]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default PublicLayout;
