import LogoutIcon from "@mui/icons-material/Logout";
import CardMedia from "@mui/material/CardMedia";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";
// import MuiTooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useRouter } from "next/router";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useCookie } from "react-use";

import { sessionOptions } from "@/utils/session";
import { useAppState } from "@/contexts/TogglerProvider";

import Menu from "./Menu";
import appRoutes from "./routes";
// import UserNav from "./UserNav";

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  // width: `calc(${theme.spacing(9)} + 1px)`,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    [`& .${drawerClasses.paper}`]: openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    [`& .${drawerClasses.paper}`]: closedMixin(theme),
  }),
}));

const Toolbar = styled(MuiToolbar)({
  justifyContent: "center",
});

const Sidebar = (): React.ReactElement => {
  const router = useRouter();
  const [, , deleteCookie] = useCookie(sessionOptions.cookieName);
  const [state] = useAppState();

  const filteredRoutes = appRoutes;

  const handleLogout = (): void => {
    deleteCookie();
    router.push("/signin");
  };

  return (
    <Drawer variant="permanent" open={state.sidebarCollapsed}>
      <Toolbar disableGutters>
        <CardMedia
          component="img"
          image="/images/AwraSafely_Sidebar_Logo.png"
          alt="/images/AwraSafely_Sidebar_Logo.png"
        />
      </Toolbar>
      {/* {state.sidebarCollapsed && (
        <UserNav fullName={fullName} roleLabel={roleLabel} />
      )} */}
      <PerfectScrollbar
        options={{ suppressScrollX: true, useBothWheelAxes: false }}
      >
        <Menu routes={filteredRoutes} isCollapsed={state.sidebarCollapsed} />
      </PerfectScrollbar>
      <List dense>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
