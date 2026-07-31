import type { AppRoute } from "../types";
import { UseContextContent } from "../../pages/hooks/useContext";
import { UseEffectContent } from "../../pages/hooks/useEffect/ index";

export const hooksRoutes: AppRoute[] = [
  {
    title: "Hooks",
    path: "/hooks",
    children: [
      {
        path: "use-effect",
        title: "useEffect",
        element: <UseEffectContent />,
      },
      {
        path: "use-context",
        title: "useContext",
        element: <UseContextContent />,
      },
    ],
  },
];
