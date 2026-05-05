import { useUsers } from '@/features/users/hooks'
import { UserList, UserForm } from '@/features/users/components'

const UsersPage = () => {
  const { users, isLoading, createUser, deleteUser, isCreating, isDeleting } = useUsers()

  return (
    <div className="p-8">
      <h1 className="text-preset-2 font-bold text-foreground mb-6">Users</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface lg:col-span-2">
          <div className="border-b border-border px-6 py-4">
            <h2 className="text-preset-6 font-semibold text-foreground">All Users</h2>
          </div>
          <UserList users={users} isLoading={isLoading} onDelete={deleteUser} isDeleting={isDeleting} />
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-preset-6 font-semibold text-foreground mb-4">Add User</h2>
          <UserForm onSubmit={createUser} isSubmitting={isCreating} />
        </div>
      </div>
    </div>
  )
}

export default UsersPage
