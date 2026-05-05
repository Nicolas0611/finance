/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage/DashboardPage"));

export const PRIVATE_ROUTE = {
  OVERVIEW: "/overview",
  TRANSACTIONS: "/transactions",
  BUDGETS: "/budgets",
  POTS: "/pots",
  RECURRING_BILLS: "/recurring-bills",
};

export const privateRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to={PRIVATE_ROUTE.OVERVIEW} />,
  },
  { path: PRIVATE_ROUTE.OVERVIEW, element: <MainLayout /> , children: [
    {
      index: true,
      element: <DashboardPage />,
    },
  ]},
];
