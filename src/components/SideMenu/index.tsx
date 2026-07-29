import styles from "./index.module.css";
import ReactLogo from "../../assets/react.svg";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import { MenuList } from "./MenuList";
import { routes } from "../../routes";
import type { AppRoute } from "../../routes/types";

export function SideMenu() {
  return (
    <nav className={styles.SideMenu}>
      <header>
        <img src={ReactLogo} alt="React Logo" />
        <h1>Learning</h1>
      </header>

      {routes.map((route) => {
        if (!route.title) {
          return null;
        }

        if (route?.children) {
          const menuItems: MenuItemProps[] = route.children.map(
            (children: AppRoute) => {
              return {
                label: children.title,
                path: [route.path, children.path].join("/") || "",
              };
            },
          );

          return (
            <MenuList key={route.path} label={route.title} items={menuItems} />
          );
        }

        return (
          <MenuItem key={route.path} label={route.title} path={route.path} />
        );
      })}
    </nav>
  );
}

SideMenu.displayName = "SideMenu";
