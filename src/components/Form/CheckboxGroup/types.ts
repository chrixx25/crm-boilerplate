import { CheckboxProps as BaseCheckboxProps } from "@mui/material/Checkbox";

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps {
  row?: boolean;
  label?: string;
  name: string;
  helperText?: string;
  defaultValue?: Array<any>;
  options?: Array<any>;
  optionValueKey?: string;
  optionLabelKey?: string;
}
