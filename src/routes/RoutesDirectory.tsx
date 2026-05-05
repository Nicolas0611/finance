import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { publicRoutes } from "./PublicRoutes";
import { privateRoutes } from "./PrivateRoutes";

export const RoutesDirectory = () => {
  const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);
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
