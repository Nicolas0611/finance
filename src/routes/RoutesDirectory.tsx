import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import { Suspense } from "react";

export const RoutesDirectory = () => {
  const router = createBrowserRouter([...publicRoutes]);
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
