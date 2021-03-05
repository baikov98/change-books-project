import React from "react";
import cn from "classnames";
import { TextField } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
    id?: string
    placeholder?: string
    label?: string
    defaultValue?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean
    errorText?: string
}


const InputItem: React.FC<IProps> = (props: IProps) => {
    const { id, placeholder, label, defaultValue, onChange, error, errorText } = props
    const classes = useStyles()

    return (
        <TextField id={id}
                   placeholder={placeholder}
                   label={label}
                   defaultValue={defaultValue}
                   onChange={onChange}
                   error={error}
                   helperText={errorText}>
        </TextField>
    )
}

export default InputItem
