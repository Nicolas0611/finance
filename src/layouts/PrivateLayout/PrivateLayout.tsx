import { useAuth } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import { PUBLIC_ROUTE } from "@/routes/PublicRoutes";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={PUBLIC_ROUTE.AUTH} />;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateLayout;
