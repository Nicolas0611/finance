import { InputSelect } from "@/components";

export const LoginPage = () => (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Page</h1>
      <p className="text-gray-500">Login Page.</p>
      <InputSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} />
    </div>
  );
export default LoginPage;

