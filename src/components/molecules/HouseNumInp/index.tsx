import React, { useState } from "react";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";

interface IProps {
  onChange?: (e: any) => void
}

const defaultProps: IProps = {
  onChange: () => null,
};

const HouseNumInp: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  const classes = useStyles();
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const errorText = state.error ? "Некорретное значение" : ""
  return (
    <TextField  type="text"
                error={state.error}
                helperText={errorText}
                variant="outlined"
                placeholder="Номер дома"
                label="Номер дома"
                value={+state.value <= 5 ? state.value : state.value.slice(0, 5)}
                onChange={(e) => {setState(prev => ({...prev, value: e.target.value})) }}
                onBlur={(e) => {setState(prev => ({...prev, error: !checkInput(e)})) }}
                 />
  );
};

const checkInput = (e: any) => {
  let str = e.target.value

  if (str.match(/^[0-9А-Яа-яЁё]+$/)
      ) { return true }
  return false
}

HouseNumInp.defaultProps = defaultProps;

export default HouseNumInp;
