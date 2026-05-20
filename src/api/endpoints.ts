export const ENDPOINTS = {
  health: "/health",
  transactions: {
    list: "/api/transactions",
  },
  auth: {
    register: "/api/auth/register",
    login: "/api/auth/login",
  },
} as const;
