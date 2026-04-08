import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { CreateUserPayload } from '../types/models';

const schema = z.object({
  name:  z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  role:  z.enum(['admin', 'editor', 'viewer']),
});

interface UserFormProps {
  onSubmit:    (data: CreateUserPayload) => Promise<unknown>;
  isSubmitting: boolean;
}

export const UserForm = ({ onSubmit, isSubmitting }: UserFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserPayload>({
    resolver: zodResolver(schema),
    defaultValues: { role: 'viewer' },
  });

  const handleFormSubmit = async (data: CreateUserPayload) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          {...register('name')}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="email@example.com"
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
        <select
          {...register('role')}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Creating…' : 'Create User'}
      </button>
    </form>
  );
};
