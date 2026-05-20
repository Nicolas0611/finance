/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const PrivateLayout = lazy(
  () => import("@/layouts/PrivateLayout/PrivateLayout"),
);
const DashboardPage = lazy(
  () => import("@/pages/private/DashboardPage/DashboardPage"),
);
const TransactionsPage = lazy(
  () => import("@/pages/private/TransactionsPage/TransactionsPage"),
);

export const PRIVATE_ROUTE = {
  DASHBOARD: "/",
  OVERVIEW: "/overview",
  TRANSACTIONS: "/transactions",
  BUDGETS: "/budgets",
  POTS: "/pots",
  RECURRING_BILLS: "/recurring-bills",
};

export const privateRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to={PRIVATE_ROUTE.DASHBOARD} />,
  },
  {
    path: PRIVATE_ROUTE.DASHBOARD,
    element: <PrivateLayout />,
    children: [
      {
        path: PRIVATE_ROUTE.OVERVIEW,
        element: <DashboardPage />,
      },
      {
        path: PRIVATE_ROUTE.TRANSACTIONS,
        element: <TransactionsPage />,
      },
    ],
  },
];
