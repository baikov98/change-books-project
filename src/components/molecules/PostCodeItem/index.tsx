import React, { useState } from "react";
import { useStyles } from "./styles";
import { TextField } from "@material-ui/core";
interface IProps {
  onChange?: (e: any) => void
}

const defaultProps: IProps = {
  onChange: () => null,
};

const PostCodeItem: React.FC<IProps> = (props: IProps) => {
  const {} = props;
  const classes = useStyles();
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const errorText = state.error ? "Необходимо 6 цифр" : ""
  return (
    <TextField  type="text"
                error={state.error}
                helperText={errorText}
                variant="outlined"
                placeholder="Почтовый индекс"
                label="Почтовый индекс"
                value={+state.value <= 6 ? state.value : state.value.slice(0, 6)}
                onChange={(e) => {setState(prev => ({...prev, value: e.target.value})) }}
                onBlur={(e) => {setState(prev => ({...prev, error: !checkName(e)})) }}
                 />
  );
};

const checkName = (e: any) => {
  let str = e.target.value
  if (!str.length) return true
  if (str.match(/^[0-9]{6}/)
      ) { return true }
  return false
}

PostCodeItem.defaultProps = defaultProps;

export default PostCodeItem;
