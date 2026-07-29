import { createContext } from "react";

interface TabContextProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TabContext = createContext<TabContextProps>({
  activeTab: "",
  setActiveTab: () => {},
});
