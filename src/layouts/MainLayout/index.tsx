import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";
import styles from "./index.module.css";

export function MainLayout() {
  return (
    <main className={styles.MainContent}>
      <SideMenu />

      <section>
        <Outlet />
      </section>
    </main>
  );
}

MainLayout.displayName = "MainLayout";
