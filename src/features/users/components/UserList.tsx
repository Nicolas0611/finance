import type { User } from "../types/models";

interface UserListProps {
  users: User[];
  isLoading: boolean;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export const UserList = ({
  users,
  isLoading,
  onDelete,
  isDeleting,
}: UserListProps) => {
  if (isLoading) {
    return <div className="text-center py-8 text-gray-500">Loading users…</div>;
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No users found.</div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between py-4 px-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-medium">
              {user.initials}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
              {user.role}
            </span>
            <button
              onClick={() => onDelete(user.id)}
              disabled={isDeleting}
              className="text-xs text-red-600 hover:text-red-800 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
