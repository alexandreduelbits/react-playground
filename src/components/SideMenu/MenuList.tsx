import { useState } from "react";
import { MenuItem, type MenuItemProps } from "./MenuItem";
import styles from "./index.module.css";

interface MenuListProps {
  label: string;
  items: MenuItemProps[];
}

export function MenuList({ items, label }: MenuListProps) {
  const [open, setOpen] = useState(false);

  return (
    <ul className={styles.MenuList}>
      <li onClick={() => setOpen(!open)} className={styles.MenuListHeader}>
        {label}
        <span
          className={`${styles.MenuItemAction} ${open ? styles.Active : ""}`}
        >
          &#9650;
        </span>
      </li>

      {open &&
        items.map((item) => (
          <MenuItem label={item.label} path={item.path} key={item.path} />
        ))}
    </ul>
  );
}

MenuList.displayName = "MenuList";
