import { IconProps } from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";

interface Route {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children?: Route[];
}

export interface MenuProps {
  routes: Route[];
  isCollapsed: boolean;
}

export interface ExpandIconProps extends IconProps {
  theme?: Theme;
  isFlipped?: Boolean;
}
