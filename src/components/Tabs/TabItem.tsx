import { useContext } from "react";
import { TabContext } from "./TabsContext";
import styles from "./index.module.css";

interface TabItemProps {
  label: string;
  value: string;
}

export function TabItem({ label, value }: TabItemProps) {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <a
      href="#"
      className={`${styles.TabItem} ${activeTab === value ? styles["active"] : ""}`}
      onClick={() => setActiveTab(value)}
    >
      {label}
    </a>
  );
}

TabItem.displayName = "TabItem";
