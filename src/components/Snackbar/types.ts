import { Theme } from "@mui/material/styles";
import { SnackbarContentProps as BaseSnackbarContentProps } from "notistack";

type AlertColor = "success" | "warning" | "error" | "info";

export interface SnackbarProps extends BaseSnackbarContentProps {
  id: string;
  message: string;
  variant: AlertColor;
}

export interface SnackbarContentProps extends BaseSnackbarContentProps {
  theme?: Theme;
  variant?: AlertColor;
  children: any;
  ref: any;
}
