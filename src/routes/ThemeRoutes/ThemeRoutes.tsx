import { useRoutes } from "react-router-dom";

// routes
import { AuthRoutes, MainRoutes } from "../index";

export const ThemeRoutes = () => {
  return useRoutes([AuthRoutes, MainRoutes]);
};
