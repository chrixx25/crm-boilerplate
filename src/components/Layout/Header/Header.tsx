import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, {
  AppBarProps as BaseAppBarProps,
} from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, Theme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useRouter } from "next/router";
import { useCookie } from "react-use";
import { Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { sessionOptions } from "@/utils/session";
import { useAppState } from "@/contexts/TogglerProvider";

interface AppBarProps extends BaseAppBarProps {
  theme?: Theme & { drawerWidth: number };
  open: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(
  ({ theme, open }) =>
    theme && {
      width: `calc(100% - ${theme.spacing(7)} + 1px)`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }
);

const Header = (): React.ReactElement => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "account-menu",
  });
  const [state, dispatch] = useAppState();
  const [, , deleteCookie] = useCookie(sessionOptions.cookieName);
  const router = useRouter();

  const handleLogout = (): void => {
    deleteCookie();
    router.push("/login");
  };

  return (
    <AppBar position="fixed" open={state.sidebarCollapsed}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch({ type: "sidebarCollapsed" })}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          size="large"
          color="inherit"
          aria-label="show more"
          aria-haspopup="true"
          {...bindTrigger(popupState)}
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          onClick={popupState.close}
          {...bindMenu(popupState)}
        >
          <MenuItem>
            <ListItemIcon>
              <LockOutlinedIcon color="action" fontSize="small" />
            </ListItemIcon>
            Change Password
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon color="action" fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
