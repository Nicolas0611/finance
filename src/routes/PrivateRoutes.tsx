/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const PrivateLayout = lazy(
  () => import("@/layouts/PrivateLayout/PrivateLayout"),
);
const DashboardPage = lazy(
  () => import("@/pages/private/DashboardPage/DashboardPage"),
);

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
  {
    path: PRIVATE_ROUTE.OVERVIEW,
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
];
