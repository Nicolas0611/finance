import { NavLink } from 'react-router-dom'
import {
  HouseIcon,
  ArrowsDownUpIcon,
  ChartDonutIcon,
  JarIcon,
  ReceiptIcon,
  ArrowFatLinesLeftIcon,
} from '@phosphor-icons/react'
import { ROUTES } from '@/routes/routes'
import { sidebarStyles as cls } from './Sidebar.styles'
import { PRIVATE_ROUTE } from '@/routes/PrivateRoutes'

const NAV_ITEMS = [
  { label: 'Overview', path: PRIVATE_ROUTE.OVERVIEW, icon: HouseIcon, end: true },
  { label: 'Transactions', path: ROUTES.transactions, icon: ArrowsDownUpIcon, end: false },
  { label: 'Budgets', path: ROUTES.budgets, icon: ChartDonutIcon, end: false },
  { label: 'Pots', path: ROUTES.pots, icon: JarIcon, end: false },
  { label: 'Recurring bills', path: ROUTES.recurringBills, icon: ReceiptIcon, end: false },
] as const

interface SidebarProps {
  isMinimized?: boolean
  onToggleMinimize?: () => void
}

const Sidebar = ({ isMinimized = false, onToggleMinimize }: SidebarProps) => (
  <aside className={cls.root(isMinimized)}>
    <div className={cls.logo}>
      <span className={cls.logoText}>{isMinimized ? 'f' : 'finance'}</span>
    </div>

    <nav className={cls.nav} aria-label="Main navigation">
      {NAV_ITEMS.map(({ label, path, icon: Icon, end }) => (
        <NavLink
          key={path}
          to={path}
          end={end}
          className={({ isActive }) => cls.navItem(isActive)}
        >
          <Icon className={cls.navIcon} weight="fill" aria-hidden="true" />
          {!isMinimized && <span className={cls.navLabel}>{label}</span>}
        </NavLink>
      ))}
    </nav>

    <button
      type="button"
      onClick={onToggleMinimize}
      className={cls.minimize}
      aria-label={isMinimized ? 'Expand menu' : 'Minimize menu'}
    >
      <ArrowFatLinesLeftIcon
        className={cls.minimizeIcon(isMinimized)}
        weight="fill"
        aria-hidden="true"
      />
      {!isMinimized && <span className={cls.minimizeLabel}>Minimize Menu</span>}
    </button>
  </aside>
)

export default Sidebar
