import { useAuth } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/routes";
import MainLayout from "../MainLayout/MainLayout";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={ROUTES.login} />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateLayout;
