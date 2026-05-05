import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components'
import { useUiStore } from '@/store/uiStore'
import { mainLayoutStyles as cls } from './MainLayout.styles'

 const MainLayout = () => {
  const { sidebarOpen, toggleSidebar } = useUiStore()

  return (
    <div className={cls.root}>
      <Sidebar isMinimized={!sidebarOpen} onToggleMinimize={toggleSidebar} />
      <main className={cls.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout;