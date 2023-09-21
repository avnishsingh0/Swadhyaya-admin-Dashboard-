import { BiRadioCircle } from "react-icons/bi";

import { FaIoxhost } from "react-icons/fa";

export const LeftMenuItems = [
  {
    name: "User",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_user.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/user-list",
      },
      { name: "Edit", icon: <BiRadioCircle />, routeInfo: "/user-edit" },
      {
        name: "Create",
        icon: <BiRadioCircle />,
        routeInfo: "/user-create",
      },
      {
        name: "Account",
        icon: <BiRadioCircle />,
        routeInfo: "/user-account",
      },
    ],
  },
  {
    name: "Teacher",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_invoice.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/teacher-list",
      },
      { name: "Edit", icon: <BiRadioCircle />, routeInfo: "/teacher-edit" },
      {
        name: "Create",
        icon: <BiRadioCircle />,
        routeInfo: "/teacher-create",
      },
      {
        name: "Account",
        icon: <BiRadioCircle />,
        routeInfo: "/teacher-account",
      },
    ],
  },
  {
    name: "Notes",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_file.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/notes-list",
      },
      { name: "Details", icon: <BiRadioCircle />, routeInfo: "/notes-details" },
      {
        name: "Create",
        icon: <BiRadioCircle />,
        routeInfo: "/notes-create",
      },
      {
        name: "Edit",
        icon: <BiRadioCircle />,
        routeInfo: "/notes-edit",
      },
    ],
  },
  {
    name: "Test",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_kanban.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/test-list",
      },
      { name: "Details", icon: <BiRadioCircle />, routeInfo: "/test-details" },
      {
        name: "Create",
        icon: <BiRadioCircle />,
        routeInfo: "/test-create",
      },
      {
        name: "Edit",
        icon: <BiRadioCircle />,
        routeInfo: "/test-edit",
      },
    ],
  },
  {
    name: "Invoice",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_invoice.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/invoice-list",
      },
      { name: "Details", icon: <BiRadioCircle />, routeInfo: "/invoice-edit" },
    ],
  },
  {
    name: "Blog",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_blog.svg") center center / contain no-repeat',

    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/blog-list",
      },
      { name: "Create", icon: <BiRadioCircle />, routeInfo: "/blog-create" },
      { name: "Edit", icon: <BiRadioCircle />, routeInfo: "/blog-edit" },
    ],
  },
  {
    name: "Subscription",
    count: "7",
    openStatus: false,
    icon: 'url("https://minimals.cc/assets/icons/navbar/ic_order.svg") center center / contain no-repeat',
    child: [
      {
        name: "List",
        icon: <BiRadioCircle />,
        routeInfo: "/subscription-list",
      },
      {
        name: "Details",
        icon: <BiRadioCircle />,
        routeInfo: "/subscription-create",
      },
    ],
  },
];
