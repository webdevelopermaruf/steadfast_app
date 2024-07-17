import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserIcon,
  SquaresPlusIcon,
  QueueListIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Products, Orders, Notifications, Sellers } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/",
        element: <Home />,
      },
      {
        icon: <SquaresPlusIcon {...icon} />,
        name: "Products",
        path: "/products",
        element: <Products />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Orders",
        path: "/orders",
        element: <Orders />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Sellers",
        path: "/sellers",
        element: <Sellers />,
      },
      {
        icon: <QueueListIcon {...icon} />,
        name: "Sales Report",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
