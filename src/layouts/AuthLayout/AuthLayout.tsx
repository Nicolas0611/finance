import { Outlet } from 'react-router-dom';

 const AuthLayout = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="w-full max-w-md">
      <Outlet />
    </div>
  </div>
);

export default AuthLayout;