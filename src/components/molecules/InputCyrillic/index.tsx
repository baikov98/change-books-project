import React, { useState } from "react";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";

interface IProps {
  maxlength: number
  placeholder?: string
  helperText?: string
  label?: string
  onChange?: (e: any) => void
}

const defaultProps: IProps = {
  maxlength: 50,
  onChange: () => null,
};

const InputCyrillic: React.FC<IProps> = (props: IProps) => {
  const { maxlength, 
          placeholder, 
          helperText, 
          label, } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const errorText = state.error ? helperText : ""
  return (
    <TextField  type="text"
                error={state.error}
                helperText={errorText}
                variant="outlined"
                placeholder={placeholder}
                label={label}
                value={+state.value <= maxlength ? state.value : state.value.slice(0, maxlength)}
                onChange={(e) => {setState(prev => ({value: e.target.value, error: !checkName(e)})) }}
                 />
  );
};

const checkName = (e: any) => {
  let str = e.target.value
  if (!str.length) return true
  if (str.match(/^[А-Яа-яЁё\s]+$/)
      ) { return true }
  return false
}

InputCyrillic.defaultProps = defaultProps;

export default InputCyrillic; 
