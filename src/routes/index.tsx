import { createBrowserRouter } from "react-router-dom";
import { hooksRoutes } from "./hooks";
import { MainLayout } from "../layouts/MainLayout";
import { generalRoutes } from "./general";

export const routes = [...generalRoutes, ...hooksRoutes];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
  },
]);
