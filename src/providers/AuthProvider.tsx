import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface AuthState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthState | null>(null);

//todo: check this authprovider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [storedValue, setValue] = useLocalStorage<string | null>(
    "access_token",
    null,
  );
  const login = (t: string) => {
    setValue(t);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setValue(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token: storedValue,
        login,
        logout,
        isAuthenticated: !!storedValue,
      }}
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
