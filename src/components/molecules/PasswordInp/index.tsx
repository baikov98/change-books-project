import React, { useState } from "react";
import { useStyles } from "./styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from "@material-ui/core";

interface IProps {
  onChange?: (e: any) => void

}

const defaultProps: IProps = {
  onChange: () => null,
};

const PasswordInp: React.FC<IProps> = (props: IProps) => {
  const { onChange, } = props;
  const classes = useStyles();
  const placeholder = "Введите пароль"
  const [state, setState] = useState({
    error: false,
    showPassword: false,
    value: ''
  })
  const handleClickShowPassword = () => setState(prev => ({...prev, showPassword: !prev.showPassword}))
  const errorText = "Не менее 8 символов - из них: не менее 1 заглавной 1 прописной буквы и 1 цифра" 
  return ( 
    <TextField  placeholder={placeholder}
                type={state.showPassword ? "text" : "password"}
                label="Пароль"
                variant="outlined"
                error={state.error}
                helperText={errorText}
                value={+state.value <= 50 ? state.value : state.value.slice(0, 50)}
                onChange={(e) => {setState(prev => ({...prev, value: e.target.value})) }}
                onBlur={(e) => {setState(prev => ({...prev, error: !checkInput(e)})) }}
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

const checkInput = (e: any) => {
  let str = e.target.value
  if (str.length <= 8) return false
  if (str.match(/[A-ZА-ЯЁ]{1}/) && 
      str.match(/[a-zа-яё]{1}/) &&
      str.match(/[0-9]{1}/)
      ) { return true }
  return false
}

PasswordInp.defaultProps = defaultProps;

export default PasswordInp;
