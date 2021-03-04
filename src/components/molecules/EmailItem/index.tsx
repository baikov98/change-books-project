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
    error: false
  })
  return (
    <TextField  type="email"
                variant="outlined"
                placeholder="Email"
                label="Почта"
                onChange={(e) => {setState(prev => ({...prev, error: !checkEmail(e)})) }}
                 />
  );
};

const checkEmail = (e: any) => {
  let str = e.target.value
  if (str.length <= 8) return false
  if (str.match(/[A-Za-z]{2}/) && 
      str.match(/[@]{1}/) &&
      str.match(/[.]{1}/)
      ) { return true }
  return false
}

EmailItem.defaultProps = defaultProps;

export default EmailItem;
