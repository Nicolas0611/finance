/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));

const PUBLIC_ROUTE = {
  ROOT: "/",
  LOGIN: "/login",
};

export const publicRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to={PUBLIC_ROUTE.LOGIN} />,
  },
  { path: PUBLIC_ROUTE.LOGIN, element: <LoginPage /> },
];
