import styles from "./index.module.css";
import ReactLogo from "../../assets/react.svg";

export function SideMenu() {
  return (
    <nav className={styles.SideMenu}>
      <header>
        <img src={ReactLogo} alt="React Logo" />
        <h1>Learning</h1>
      </header>
    </nav>
  );
}

SideMenu.displayName = "SideMenu";
