import { useUsers } from "../features/users/hooks";
import { UserList } from "../features/users/components/UserList";
import { UserForm } from "../features/users/components/UserForm";

export const UsersPage = () => {
  const { users, isLoading, createUser, deleteUser, isCreating, isDeleting } =
    useUsers();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-700">All Users</h2>
          </div>
          <UserList
            users={users}
            isLoading={isLoading}
            onDelete={deleteUser}
            isDeleting={isDeleting}
          />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Add User</h2>
          <UserForm onSubmit={createUser} isSubmitting={isCreating} />
        </div>
      </div>
    </div>
  );
};
