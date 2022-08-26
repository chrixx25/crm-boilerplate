import DashboardIcon from "@mui/icons-material/Dashboard";

interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: Route[];
}

const routes: Route[] = [
  {
    name: "Main",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Chat Bot",
    path: "/chat-bot",
    icon: <DashboardIcon />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    children: [
      {
        name: "Users",
        path: "/dashboard/users",
        icon: null,
      },
    ],
  },
];

export default routes;
