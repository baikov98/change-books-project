import React, { useState } from "react";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";
interface IProps {
  onChange?: (e: any) => void
}

const defaultProps: IProps = {
  onChange: () => null,
};

const EmailItem: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  const classes = useStyles();
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const errorText = state.error ? "Введите корректный Email" : ""
  return (
    <TextField  type="text"
                error={state.error}
                helperText={errorText}
                variant="outlined"
                placeholder="Почта"
                label="Email"
                value={+state.value <= 50 ? state.value : state.value.slice(0, 50)}
                onChange={(e) => {setState(prev => ({...prev, value: e.target.value})) }}
                onBlur={(e) => {setState(prev => ({...prev, error: !checkEmail(e)})) }}
                 />
  );
};

const checkEmail = (e: any) => {
  let str = e.target.value
  if (str.length <= 4) return false
  if (str.match(/^[A-Za-z@]{2}/) && 
      str.match(/[.]{1}/) //&&
      //str.match(/[0-9]{1}/)
      ) { return true }
  return false
}

EmailItem.defaultProps = defaultProps;

export default EmailItem;
