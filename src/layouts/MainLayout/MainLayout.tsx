import { BottomNav, Sidebar } from "@/components";
import { useUiStore } from "@/store/uiStore";
import { mainLayoutStyles as cls } from "./MainLayout.styles";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { sidebarOpen, toggleSidebar } = useUiStore();

  return (
    <div className={cls.root}>
      {/* Desktop: left sidebar */}
      <Sidebar isMinimized={!sidebarOpen} onToggleMinimize={toggleSidebar} />
      {/* Mobile + Tablet: fixed bottom nav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
      <main className={cls.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
