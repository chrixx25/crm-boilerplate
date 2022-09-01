import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useDebounce } from "react-use";

import { InputBaseProps } from "../types";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  border: 0,
  borderRadius: "50rem",
  [`& .${inputBaseClasses.input}`]: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0.875, 1.5),
  },
  "& > svg": {
    color: "#2E3A59",
  },
}));

const SearchInput = (props: InputBaseProps): React.ReactElement => {
  const { placeholder, onChange } = props;
  const [value, setValue] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue(event.target.value);
  };

  useDebounce(
    () => {
      onChange(value);
    },
    700,
    [value]
  );

  return (
    <StyledInputBase
      placeholder={placeholder}
      startAdornment={<SearchIcon fontSize="small" />}
      value={value}
      onChange={handleChange}
    />
  );
};

SearchInput.defaultProps = {
  onChange: () => {},
};

export default SearchInput;
