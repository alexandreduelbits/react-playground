import { useContext } from "react";
import { TabContext } from "./TabsContext";

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

export function TabContent({ value, children }: TabContentProps) {
  const { activeTab } = useContext(TabContext);

  if (activeTab !== value) {
    return null;
  }

  return <div>{children}</div>;
}

TabContent.displayName = "TabContent";
