type UserRole = "USER" | "ADMIN";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
}

export type AuthResponseDTO = {
  token: string;
  user: UserDTO;
};
