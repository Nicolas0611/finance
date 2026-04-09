import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthState | null>(null);

//todo: check this authprovider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("access_token"),
  );

  const login = (t: string) => {
    localStorage.setItem("access_token", t);
    setToken(t);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthState => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
