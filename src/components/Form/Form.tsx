import type { FormProps } from "./types";

import { FormProvider, UseFormReturn } from "react-hook-form";

import Autocomplete from "./Autocomplete";
import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import RadioGroup from "./RadioGroup";
import Select from "./Select";
import TextField from "./TextField";
import ToggleButtonGroup from "./ToggleButtonGroup";

// type FormProps<TFormValues> = {
//   onSubmit: SubmitHandler<TFormValues>;
//   children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
// };

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  ...methods
}: FormProps<TFormValues> & UseFormReturn<TFormValues>): React.ReactElement => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

// const Form = (props): React.ReactElement => {
//   const { onSubmit, children, ...methods } = props;

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
//     </FormProvider>
//   );
// };

Form.Autocomplete = Autocomplete;
Form.Checkbox = Checkbox;
Form.CheckboxGroup = CheckboxGroup;
Form.RadioGroup = RadioGroup;
Form.Select = Select;
Form.TextField = TextField;
Form.ToggleButtonGroup = ToggleButtonGroup;
Form.DatePicker = DatePicker;

export default Form;
