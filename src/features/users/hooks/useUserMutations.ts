import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser } from '../services/userService';
import { userKeys } from './queryKeys';

export const useCreateUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      qc.invalidateQueries({ queryKey: userKeys.all });
      qc.setQueryData(userKeys.byId(newUser.id), newUser);
    },
  });
};

export const useDeleteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, id) => {
      qc.removeQueries({ queryKey: userKeys.byId(id) });
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};
