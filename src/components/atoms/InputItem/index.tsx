import React from "react";
import cn from "classnames";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Typography, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  value: string;
  inputType?: string;
  className?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
  clearClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

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
      clearClick,
      multiline,
      rows,
    } = props;
    const classes = useStyles(props);
    const inputClass = cn(classes.input, className);

    const endIcon = (
      <CloseIcon className={classes.endIcon} onClick={clearClick} />
    );

    return (
      <Box className={classes.inputBox}>
        {label && (
          <Typography className={classes.inputLabel}>{label}</Typography>
        )}
        <TextField
          InputProps={{
            disableUnderline: true,
            endAdornment: value && clearClick ? endIcon : null,
          }}
          ref={ref}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          className={inputClass}
          type={inputType}
          placeholder={placeholder}
          helperText={errorText}
          multiline={multiline}
          rows={rows}
        />
        {error && (
          <Typography className={classes.error}>{`* ${error}`}</Typography>
        )}
      </Box>
    );
  }
);

export default InputItem;
