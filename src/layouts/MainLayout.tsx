import { Outlet } from 'react-router-dom';
import { useUiStore } from '../store/uiStore';

export const MainLayout = () => {
  const { sidebarOpen, toggleSidebar } = useUiStore();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {sidebarOpen && (
            <span className="text-lg font-semibold text-gray-900">Finance</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { label: 'Dashboard', href: '/' },
            { label: 'Transactions', href: '/transactions' },
            { label: 'Accounts', href: '/accounts' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            >
              {sidebarOpen && item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
