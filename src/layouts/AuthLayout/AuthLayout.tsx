import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div className="h-screen bg-canvas">
    <Outlet />
  </div>
);

export default AuthLayout;