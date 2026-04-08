import type { UserDTO, CreateUserPayloadDTO } from '../types/dto';
import type { User, UserRole, CreateUserPayload } from '../types/models';

const ROLE_MAP: Record<number, UserRole> = { 1: 'admin', 2: 'editor', 3: 'viewer' };
const ROLE_CODE_MAP: Record<UserRole, 1 | 2 | 3> = { admin: 1, editor: 2, viewer: 3 };

const getInitials = (name: string) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

export const mapUser = (dto: UserDTO): User => ({
  id:        dto.user_id,
  name:      dto.full_name,
  email:     dto.email,
  role:      ROLE_MAP[dto.role_code] ?? 'viewer',
  isActive:  dto.is_active === 1,
  createdAt: new Date(dto.created_at),
  initials:  getInitials(dto.full_name),
});

export const mapUsers = (dtos: UserDTO[]): User[] => dtos.map(mapUser);

export const mapCreateUserPayload = (p: CreateUserPayload): CreateUserPayloadDTO => ({
  full_name: p.name,
  email:     p.email,
  role_code: ROLE_CODE_MAP[p.role],
});
