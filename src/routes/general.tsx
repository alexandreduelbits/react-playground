import { SuspenseContent } from "../pages/suspense";
import { PortalsContent } from "../pages/portals";
import type { AppRoute } from "./types";

export const generalRoutes: AppRoute[] = [
  {
    title: "Portals",
    path: "/portals",
    element: <PortalsContent />,
  },
  {
    title: "Suspense",
    path: "/suspense",
    element: <SuspenseContent />,
  },
];
