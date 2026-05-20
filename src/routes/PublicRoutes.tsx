/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/public/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("@/pages/public/SignupPage/SignupPage"));
const PublicLayout = lazy(() => import("@/layouts/PublicLayout/PublicLayout"));

export const PUBLIC_ROUTE = {
  ROOT: "/",
  AUTH: "/auth",
  LOGIN: "login",
  SIGNUP: "signup",
};

export const publicRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: PUBLIC_ROUTE.AUTH,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: PUBLIC_ROUTE.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PUBLIC_ROUTE.SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
];
