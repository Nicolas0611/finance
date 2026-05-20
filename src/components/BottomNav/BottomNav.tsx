import { NavLink } from "react-router-dom";
import { bottomNavStyles as cls } from "./BottomNav.styles";
import { NAV_ITEMS } from "@/components/Sidebar/navItems";

const BottomNav = () => (
  <nav className={cls.root} aria-label="Main navigation">
    <ul className={cls.nav} role="list">
      {NAV_ITEMS.map(({ label, path, icon: Icon, end }) => (
        <li key={path}>
          <NavLink
            to={path}
            end={end}
            className={({ isActive }) => cls.navItem(isActive)}
            aria-label={label}
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={cls.navIcon(isActive)}
                  weight="fill"
                  aria-hidden="true"
                />
                <span className={cls.navLabel(isActive)}>{label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default BottomNav;
