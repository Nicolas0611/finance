export type UserRole = 'admin' | 'editor' | 'viewer';

export interface User {
  id:        string;
  name:      string;
  email:     string;
  role:      UserRole;
  isActive:  boolean;
  createdAt: Date;
  initials:  string;
}

export interface CreateUserPayload {
  name:  string;
  email: string;
  role:  UserRole;
}
