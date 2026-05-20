import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./providers/AuthProvider";
import { QueryProvider } from "./providers/QueryProvider";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={5000} pauseOnHover />
        <App />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>,
);
