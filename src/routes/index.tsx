import { createBrowserRouter } from "react-router-dom";
import { hooksRoutes } from "./hooks";
import { MainLayout } from "../layouts/MainLayout";

export const routes = [...hooksRoutes];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
  },
]);
