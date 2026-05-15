type UserRole = "USER" | "ADMIN";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  initials: string;
}

export type LoginResponseDTO = {
  token: string;
  user: UserDTO;
};
