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

const Ecommerce = Loadable(
  lazy(() =>
    import("../../pages/ECommerce").then((module) => ({
      default: module.ECommerce,
    }))
  )
);

// User routes
const UserList = Loadable(
  lazy(() =>
    import("../../pages/User/UserList").then((module) => ({
      default: module.UserList,
    }))
  )
);

const UserEdit = Loadable(
  lazy(() =>
    import("../../pages/User/UserEdit").then((module) => ({
      default: module.UserEdit,
    }))
  )
);

const UserCreate = Loadable(
  lazy(() =>
    import("../../pages/User/UserCreate").then((module) => ({
      default: module.UserCreate,
    }))
  )
);

const UserAccount = Loadable(
  lazy(() =>
    import("../../pages/User/UserAccount").then((module) => ({
      default: module.UserAccount,
    }))
  )
);

// Teacher routes
const TeacherList = Loadable(
  lazy(() =>
    import("../../pages/Teacher/TeacherList").then((module) => ({
      default: module.TeacherList,
    }))
  )
);

const TeacherEdit = Loadable(
  lazy(() =>
    import("../../pages/Teacher/TeacherEdit").then((module) => ({
      default: module.TeacherEdit,
    }))
  )
);

const TeacherCreate = Loadable(
  lazy(() =>
    import("../../pages/Teacher/TeacherCreate").then((module) => ({
      default: module.TeacherCreate,
    }))
  )
);

const TeacherAccount = Loadable(
  lazy(() =>
    import("../../pages/Teacher/TeacherAccount").then((module) => ({
      default: module.TeacherAccount,
    }))
  )
);

// Notes routes
const NotesList = Loadable(
  lazy(() =>
    import("../../pages/Notes/NotesList").then((module) => ({
      default: module.NotesList,
    }))
  )
);
const NotesDetails = Loadable(
  lazy(() =>
    import("../../pages/Notes/NotesDetails").then((module) => ({
      default: module.NotesDetails,
    }))
  )
);
const NotesEdit = Loadable(
  lazy(() =>
    import("../../pages/Notes/NotesEdit").then((module) => ({
      default: module.NotesEdit,
    }))
  )
);

const NotesCreate = Loadable(
  lazy(() =>
    import("../../pages/Notes/NotesCreate").then((module) => ({
      default: module.NotesCreate,
    }))
  )
);

// Test routes
const TestList = Loadable(
  lazy(() =>
    import("../../pages/Test/TestList").then((module) => ({
      default: module.TestList,
    }))
  )
);

const TestEdit = Loadable(
  lazy(() =>
    import("../../pages/Test/TestEdit").then((module) => ({
      default: module.TestEdit,
    }))
  )
);

const TestCreate = Loadable(
  lazy(() =>
    import("../../pages/Test/TestCreate").then((module) => ({
      default: module.TestCreate,
    }))
  )
);

const TestDetails = Loadable(
  lazy(() =>
    import("../../pages/Test/TestDetails").then((module) => ({
      default: module.TestDetails,
    }))
  )
);

// Invoice routes
const InvoiceList = Loadable(
  lazy(() =>
    import("../../pages/Invoice/InvoiceList").then((module) => ({
      default: module.InvoiceList,
    }))
  )
);

const InvoiceDetails = Loadable(
  lazy(() =>
    import("../../pages/Invoice/InvoiceDetails").then((module) => ({
      default: module.InvoiceDetails,
    }))
  )
);

// Blog routes
const BlogList = Loadable(
  lazy(() =>
    import("../../pages/Blog/BlogList").then((module) => ({
      default: module.BlogList,
    }))
  )
);

const BlogCreate = Loadable(
  lazy(() =>
    import("../../pages/Blog/BlogCreate").then((module) => ({
      default: module.BlogCreate,
    }))
  )
);

const BlogEdit = Loadable(
  lazy(() =>
    import("../../pages/Blog/BlogEdit").then((module) => ({
      default: module.BlogEdit,
    }))
  )
);

// Subscription routes
const SubscriptionList = Loadable(
  lazy(() =>
    import("../../pages/Subscription/SubscriptionList").then((module) => ({
      default: module.SubscriptionList,
    }))
  )
);

const SubscriptionDetails = Loadable(
  lazy(() =>
    import("../../pages/Subscription/SubscriptionDetails").then((module) => ({
      default: module.SubscriptionDetails,
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
      path: "/e-commerce",
      element: <Ecommerce />,
    },
    {
      path: "/user-list",
      element: <UserList />,
    },
    {
      path: "/user-edit",
      element: <UserEdit />,
    },
    {
      path: "/user-create",
      element: <UserCreate />,
    },
    {
      path: "/user-account",
      element: <UserAccount />,
    },
    {
      path: "/teacher-list",
      element: <TeacherList />,
    },
    {
      path: "/teacher-edit",
      element: <TeacherEdit />,
    },
    {
      path: "/teacher-create",
      element: <TeacherCreate />,
    },
    {
      path: "/teacher-account",
      element: <TeacherAccount />,
    },
    {
      path: "/notes-list",
      element: <NotesList />,
    },
    {
      path: "/notes-details",
      element: <NotesDetails />,
    },
    {
      path: "/notes-create",
      element: <NotesCreate />,
    },
    {
      path: "/notes-edit",
      element: <NotesEdit />,
    },
    {
      path: "/test-list",
      element: <TestList />,
    },
    {
      path: "/test-edit",
      element: <TestEdit />,
    },
    {
      path: "/test-create",
      element: <TestCreate />,
    },
    {
      path: "/test-details",
      element: <TestDetails />,
    },
    {
      path: "/invoice-list",
      element: <InvoiceList />,
    },
    {
      path: "/invoice-edit",
      element: <InvoiceDetails />,
    },
    {
      path: "/blog-list",
      element: <BlogList />,
    },
    {
      path: "/blog-create",
      element: <BlogCreate />,
    },
    {
      path: "/blog-edit",
      element: <BlogEdit />,
    },
    {
      path: "/subscription-list",
      element: <SubscriptionList />,
    },
    {
      path: "/subscription-create",
      element: <SubscriptionDetails />,
    },
  ],
};
