import styles from "./index.module.css";

export function TabList({ children }: { children: React.ReactNode }) {
  return <div className={styles.TabList}>{children}</div>;
}

TabList.displayName = "TabList";
