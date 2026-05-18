import { Sidebar } from "@/components";
import { useUiStore } from "@/store/uiStore";
import { mainLayoutStyles as cls } from "./MainLayout.styles";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { sidebarOpen, toggleSidebar } = useUiStore();

  return (
    <div className={cls.root}>
      <Sidebar isMinimized={!sidebarOpen} onToggleMinimize={toggleSidebar} />
      <main className={cls.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
