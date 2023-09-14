import { lazy } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Loadable } from "../../components";

// project imports
const Dashboard = Loadable(
  lazy(() =>
    import("../../pages/Dashboard").then((module) => ({
      default: module.Dashboard,
    }))
  )
);
const Dummy = Loadable(
  lazy(() =>
    import("../../pages/Dummy").then((module) => ({
      default: module.Dummy,
    }))
  )
);


// ==============================|| MAIN ROUTING ||============================== //

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/dummy",
      element: <Dummy/>,
    },
  ],
};
