import React, { forwardRef } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";
import { useRadioGroup } from "@mui/material/RadioGroup";

import { RadioProps } from "../types";

const Radio = forwardRef((props: RadioProps, ref): React.ReactElement => {
  const radioGroup = useRadioGroup();
  let checked = false;

  const { label, value } = props;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <FormControlLabel
      label={label}
      value={value}
      control={<MuiRadio inputRef={ref} checked={checked} />}
    />
  );
});

Radio.displayName = "Radio";

Radio.defaultProps = {
  label: "",
  value: "",
};

Radio.propTypes = {};

export default Radio;
