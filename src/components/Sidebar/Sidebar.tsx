import { NavLink } from "react-router-dom";
import { ArrowFatLinesLeftIcon } from "@phosphor-icons/react";
import { sidebarStyles as cls } from "./Sidebar.styles";
import { NAV_ITEMS } from "./navItems";

interface SidebarProps {
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

const Sidebar = ({ isMinimized = false, onToggleMinimize }: SidebarProps) => (
  <aside className={cls.root(isMinimized)}>
    <div className={cls.logo}>
      {isMinimized ? (
        <img src="/LogoMinimized.svg" alt="Finance" />
      ) : (
        <img src="/Logo.svg" alt="Finance" />
      )}
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
      aria-label={isMinimized ? "Expand menu" : "Minimize menu"}
    >
      <ArrowFatLinesLeftIcon
        className={cls.minimizeIcon(isMinimized)}
        weight="fill"
        aria-hidden="true"
      />
      {!isMinimized && <span className={cls.minimizeLabel}>Minimize Menu</span>}
    </button>
  </aside>
);

export default Sidebar;
