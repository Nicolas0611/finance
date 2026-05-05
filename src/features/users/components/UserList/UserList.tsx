import type { User } from '../../types/models'

interface UserListProps {
  users:     User[]
  isLoading: boolean
  onDelete:  (id: string) => void
  isDeleting: boolean
}

const UserList = ({ users, isLoading, onDelete, isDeleting }: UserListProps) => {
  if (isLoading) return <div className="py-8 text-center text-secondary">Loading users…</div>
  if (users.length === 0) return <div className="py-8 text-center text-secondary">No users found.</div>

  return (
    <ul className="divide-y divide-border">
      {users.map((user) => (
        <li key={user.id} className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-preset-6 font-medium text-accent">
              {user.initials}
            </div>
            <div>
              <p className="text-preset-6 font-medium text-foreground">{user.name}</p>
              <p className="text-preset-6 text-secondary">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-canvas px-2 py-1 text-preset-6 capitalize text-secondary">
              {user.role}
            </span>
            <button
              onClick={() => onDelete(user.id)}
              disabled={isDeleting}
              className="text-preset-6 text-error hover:text-error/80 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UserList
