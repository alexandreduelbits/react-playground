import React from "react";
import { TabContext } from "./TabsContext";
import { TabContent } from "./TabsContent";
import { TabItem } from "./TabItem";
import { TabList } from "./TabList";
import styles from "./index.module.css";

function Root({
  children,
  activeTab: activeTabProp,
}: {
  children: React.ReactNode;
  activeTab: string;
}) {
  const [activeTab, setActiveTab] = React.useState<string>(activeTabProp);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={styles.Tabs}>{children}</div>
    </TabContext.Provider>
  );
}

const Tabs = Object.assign(
  {},
  {
    Root,
    List: TabList,
    Item: TabItem,
    Content: TabContent,
  },
);

export { Tabs };

Root.displayName = "Root";
