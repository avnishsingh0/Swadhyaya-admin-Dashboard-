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
const ForgetPassword = Loadable(
  lazy(() =>
    import("../../pages/Auth").then((module) => ({
      default: module.ForgetPassword,
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
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
  ],
};
