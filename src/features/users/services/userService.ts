import apiClient from '../../../api/apiClient';
import { ENDPOINTS } from '../../../api/endpoints';
import { mapUser, mapUsers, mapCreateUserPayload } from '../mappers/userMapper';
import type { UserDTO } from '../types/dto';
import type { User, CreateUserPayload } from '../types/models';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<UserDTO[]>(ENDPOINTS.users.list);
  return mapUsers(data);
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await apiClient.get<UserDTO>(ENDPOINTS.users.byId(id));
  return mapUser(data);
};

export const createUser = async (payload: CreateUserPayload): Promise<User> => {
  const dto = mapCreateUserPayload(payload);
  const { data } = await apiClient.post<UserDTO>(ENDPOINTS.users.list, dto);
  return mapUser(data);
};

export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(ENDPOINTS.users.byId(id));
};
