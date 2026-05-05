/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage/DashboardPage"));
const PRIVATE_ROUTE = {
  DASHBOARD: "/dashboard",
};

export const privateRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to={PRIVATE_ROUTE.DASHBOARD} />,
  },
  { path: PRIVATE_ROUTE.DASHBOARD, element: <MainLayout /> , children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
  ]},
];
