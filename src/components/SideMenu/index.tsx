import styles from "./index.module.css";
import ReactLogo from "../../assets/react.svg";
import { routes } from "../../routes";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import { MenuList } from "./MenuList";

export function SideMenu() {
  return (
    <nav className={styles.SideMenu}>
      <header>
        <img src={ReactLogo} alt="React Logo" />
        <h1>Learning</h1>
      </header>

      {routes.map((route) => {
        if (route?.children) {
          const menuItems: MenuItemProps[] = route.children.map((children) => {
            return {
              label: children.title,
              path: children.path,
            };
          });

          return <MenuList label={route.title} items={menuItems} />;
        }

        return <MenuItem label={route.title} path={route.path} />;
      })}
    </nav>
  );
}

SideMenu.displayName = "SideMenu";
