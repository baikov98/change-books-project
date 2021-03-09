import React from "react";
import cn from "classnames";
import { Box, Typography, TextField } from "@material-ui/core";

import { useStyles } from "./styles";

export interface IProps {
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  value?: string;
  inputType?: string;
  className?: string;
  error?: string;
}

const defaultProps: IProps = {
  inputType: "text",
  onChange: () => null,
};

const InputItem = React.forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref) => {
    const {
      placeholder,
      label,
      defaultValue,
      onChange,
      error,
      errorText,
      value,
      inputType,
      className,
    } = props;
    const classes = useStyles(props);

    const inputClass = cn(classes.input, className);
    return (
      <Box className={classes.inputBox}>
        {label && (
          <Typography className={classes.inputLabel}>{label}</Typography>
        )}
        <TextField
          InputProps={{ disableUnderline: true }}
          ref={ref}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          className={inputClass}
          type={inputType}
          placeholder={placeholder}
          helperText={errorText}
        />
        {error && (
          <Typography className={classes.error}>{`* ${error}`}</Typography>
        )}
      </Box>
    );
  }
);

// InputItem.defaultProps = defaultProps;
export default InputItem;
