import { CheckboxProps as BaseCheckboxProps } from "@mui/material/Checkbox";

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  helperText?: string;
}
