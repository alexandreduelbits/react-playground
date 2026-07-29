import type { AppRoute } from "../types";
import { UseContext } from "../../pages/hooks/useContext";

export const hooksRoutes: AppRoute[] = [
  {
    title: "Hooks",
    path: "/hooks",
    children: [
      {
        path: "use-context",
        title: "useContext",
        element: <UseContext />,
      },
    ],
  },
];
