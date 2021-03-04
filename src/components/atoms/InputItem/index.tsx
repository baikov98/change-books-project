import React from "react";
import cn from "classnames";
import { TextField } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
  id?: string;
  pattern?: string; 
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  value?: string;
  error?: boolean;
  errorText?: string;
  variant?: "filled" | "outlined";
  className?: string;
  endAdornment?: any;
}

const defaultProps: IProps = {
  onChange: () => null,
};

const InputItem: React.FC<IProps> = (props: IProps) => {
  const {
    id,
    pattern,
    value,
    placeholder,
    label,
    defaultValue,
    onChange,
    error,
    errorText,
    variant,
    className,
    endAdornment
  } = props;
  const classes = useStyles();

  return (
    <TextField
      id={id}
      placeholder={placeholder}
      label={label}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      helperText={errorText}
      value={value}
      variant={variant}
      className={className}
    />
  );
};

InputItem.defaultProps = defaultProps;

export default InputItem;
