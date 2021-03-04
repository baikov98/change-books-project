import React, { useState } from "react";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";
interface IProps {
  onChange?: (e: any) => void
}

const defaultProps: IProps = {
  onChange: () => null,
};

const SurnameItem: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  const classes = useStyles();
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const errorText = state.error ? "Только буквы кириллицы" : ""
  return (
    <TextField  type="text"
                error={state.error}
                helperText={errorText}
                variant="outlined"
                placeholder="Введите фамилию"
                label="Фамилия"
                value={+state.value <= 50 ? state.value : state.value.slice(0, 50)}
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

SurnameItem.defaultProps = defaultProps;

export default SurnameItem;
