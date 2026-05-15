export interface LoginPayload {
  email: string;
  password: string;
}

type UserRole = "USER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  initials: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
