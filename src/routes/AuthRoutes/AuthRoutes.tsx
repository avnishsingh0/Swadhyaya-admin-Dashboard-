import { lazy } from "react";
// project imports
import { AuthLayout, Loadable } from "../../components";

const SignIn = Loadable(
  lazy(() =>
    import("../../pages/Auth").then((module) => ({
      default: module.Login,
    }))
  )
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

export const AuthRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/",
      element: <SignIn />,
    },
  ],
};
