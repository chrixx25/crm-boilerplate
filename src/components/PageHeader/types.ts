import { Theme } from "react-toastify";
import { InputBaseProps as BaseInputBaseProps } from "@mui/material/InputBase";
import { IconButtonProps as BaseIconButtonProps } from "@mui/material/IconButton";

export interface TitleProps {
  theme?: Theme;
  isFirst?: boolean;
}

export interface BreadcrumbProps {
  theme?: Theme;
}

export interface CachedIconProps {
  theme?: Theme;
  isLoading?: boolean;
}

export interface InputBaseProps extends BaseInputBaseProps {
  placeholder?: string;
  onChange?: (e?: any) => void;
}

export interface IconButtonProps extends BaseIconButtonProps {
  onClick: () => void;
}

export interface PageHeaderProps {
  title?: string;
  titleLinks?: {
    link?: string;
    text?: string;
  }[];
  SearchProps?: InputBaseProps | undefined;
  RefreshProps?: IconButtonProps | undefined;
  children?: React.ReactNode | string;
}
