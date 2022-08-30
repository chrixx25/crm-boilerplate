import React from "react";

import { SubmitHandler } from "react-hook-form";

// import { TextFieldProps } from "./TextField/types";
// import { DatePickerProps } from "./DatePicker/types";
// import { AutocompleteProps } from "./Autocomplete/types";
// import { CheckboxProps } from "./Checkbox/types";
// import { CheckboxGroupProps } from "./CheckboxGroup/types";
// import { RadioGroupProps } from "./RadioGroup/types";
// import { SelectProps } from "./Select/types";
// import { ToggleButtonGroupTypeProps } from "./ToggleButtonGroup/types";

export type FormProps<TFormValues> = {
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  // Autocomplete?: React.ReactElement<AutocompleteProps>;
  // Checkbox?: React.ReactElement<CheckboxProps>;
  // CheckboxGroup?: React.ReactElement<CheckboxGroupProps>;
  // RadioGroup?: React.ReactElement<RadioGroupProps>;
  // Select?: React.ReactElement<SelectProps>;
  // TextField?: React.ReactElement<TextFieldProps>;
  // ToggleButtonGroup?: React.ReactElement<ToggleButtonGroupTypeProps>;
  // DatePicker?: React.ReactElement<DatePickerProps>;
};

// export interface FormProps {
//   onSubmit: SubmitHandler<any>;
//   children: React.ReactNode;
//   Autocomplete?: React.ReactElement<AutocompleteProps>;
//   Checkbox?: React.ReactElement<CheckboxProps>;
//   CheckboxGroup?: React.ReactElement<CheckboxGroupProps>;
//   RadioGroup?: React.ReactElement<RadioGroupProps>;
//   Select?: React.ReactElement<SelectProps>;
//   TextField?: React.ReactElement<TextFieldProps>;
//   ToggleButtonGroup?: React.ReactElement<ToggleButtonGroupTypeProps>;
//   DatePicker?: React.ReactElement<DatePickerProps>;
// }
