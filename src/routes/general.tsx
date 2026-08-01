import { SuspenseContent } from "../pages/suspense";
import type { AppRoute } from "./types";

export const generalRoutes: AppRoute[] = [
  {
    title: "Suspense",
    path: "/suspense",
    element: <SuspenseContent />,
  },
];
