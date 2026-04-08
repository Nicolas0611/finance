import { useQuery } from '@tanstack/react-query';
import { getUsers, getUserById } from '../services/userService';
import { userKeys } from './queryKeys';

export const useUserList = () =>
  useQuery({
    queryKey: userKeys.all,
    queryFn:  getUsers,
    staleTime: 1000 * 60 * 5,
  });

export const useUser = (id: string) =>
  useQuery({
    queryKey: userKeys.byId(id),
    queryFn:  () => getUserById(id),
    enabled:  !!id,
  });
