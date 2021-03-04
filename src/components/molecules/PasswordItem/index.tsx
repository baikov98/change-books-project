import React, { useState } from "react";
import InputItem from '../../atoms/InputItem'
import { useStyles } from "./styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from "@material-ui/core";
import Input from '@material-ui/core/Input';
interface IProps {
  onChange?: (e: any) => void

}

const defaultProps: IProps = {
  onChange: () => null,
};

const PasswordItem: React.FC<IProps> = (props: IProps) => {
  const { onChange, } = props;
  const classes = useStyles();
  const placeholder = "Введите пароль"
  const [state, setState] = useState({
    error: false,
    showPassword: false
  })
  const handleClickShowPassword = () => setState(prev => ({...prev, showPassword: !prev.showPassword}))
  return ( 
    <TextField  placeholder={placeholder}
                type={state.showPassword ? "text" : "password"}
                label="Пароль"
                variant="outlined"
                error={state.error}
                onChange={(e) => {setState(prev => ({...prev, error: !checkPass(e)})) }}
                InputProps={{
                  endAdornment: <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                >
                                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                }}
                />
  );
};

const checkPass = (e: any) => {
  let str = e.target.value
  if (str.length <= 8) return false
  if (str.match(/[A-ZА-ЯЁ]{1}/) && 
      str.match(/[a-zа-яё]{1}/) &&
      str.match(/[0-9]{1}/)
      ) { return true }
  return false
}

PasswordItem.defaultProps = defaultProps;

export default PasswordItem;
