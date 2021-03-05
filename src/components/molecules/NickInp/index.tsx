import React, { useState } from "react";
import { useStyles } from "./styles";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from "@material-ui/core";

interface IProps {
  onChange?: (e: any) => void

}

const defaultProps: IProps = {
  onChange: () => null,
};

const NickInp: React.FC<IProps> = (props: IProps) => {
  const { onChange, } = props;
  const classes = useStyles();
  const placeholder = "Введите ник"
  const [state, setState] = useState({
    error: false,
    value: ''
  })
  const handleRandomNick = () => null
  const errorText = state.error ? "Только буквы кириллицы и латиницы" : ""
  return ( 
    <TextField  placeholder={placeholder}
                type="text"
                label="Ник"
                variant="outlined"
                error={state.error}
                helperText={errorText}
                value={+state.value <= 50 ? state.value : state.value.slice(0, 50)}
                onChange={(e) => {setState(prev => ({...prev, value: e.target.value})) }}
                onBlur={(e) => {setState(prev => ({...prev, error: !checkInput(e)})) }}
                InputProps={{
                  endAdornment: <IconButton
                                            aria-label="toggle visibility"
                                            onClick={handleRandomNick}
                                            edge="end"
                                >
                                  <ShuffleIcon />
                                </IconButton>
                }}
                />
  );
};

const checkInput = (e: any) => {
  let str = e.target.value
  if (str.length <= 2) return false
  if (str.match(/^[А-Яа-яЁёA-Za-z\s]+$/)) { return true }
  return false
}

NickInp.defaultProps = defaultProps;

export default NickInp;
