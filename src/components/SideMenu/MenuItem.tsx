import { Link } from "react-router-dom";
import styles from "./index.module.css";

export interface MenuItemProps {
  label?: string;
  path: string;
}

export function MenuItem({ label, path }: MenuItemProps) {
  return (
    <li className={styles.MenuItem}>
      <Link to={path}>{label}</Link>
    </li>
  );
}
