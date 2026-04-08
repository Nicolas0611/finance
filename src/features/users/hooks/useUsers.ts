import { useUserList } from './useUserQueries';
import { useCreateUser, useDeleteUser } from './useUserMutations';

export const useUsers = () => {
  const { data: users = [], isLoading, error } = useUserList();
  const createMutation = useCreateUser();
  const deleteMutation = useDeleteUser();

  return {
    users,
    isLoading,
    error,
    createUser:  createMutation.mutateAsync,
    deleteUser:  deleteMutation.mutate,
    isCreating:  createMutation.isPending,
    isDeleting:  deleteMutation.isPending,
  };
};
