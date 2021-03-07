import React from "react";
import cn from "classnames";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useStyles } from "./styles";

export interface IProps {
    btnType?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    className?: string;
    btnColor?: "white" | "orange";
    type?: 'solid' | 'border' | 'back' | 'forward' | 'disabled';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}


const ButtonItem: React.FC<IProps> = (props) => {
    const { btnType, className, disabled, onClick, size, children, type } = props
    const classes = useStyles(props)

    const classText = cn(classes.text, classes[type || 'solid'], className)

    return (
        <Button
            disableTouchRipple
            disableRipple
            type={btnType}
            className={classes.button}
            disabled={disabled}
            onClick={onClick}
            size={size}
        >
            
            <Typography variant={"subtitle1"} className={classText}>
            {type === 'back' && (
                <ArrowBackIcon className={classes.icon}/>
            )}
                {children}
            {type === 'forward' && (
                <ArrowForwardIcon className={classes.icon}/>
            )}
            </Typography>
            
        </Button>
    )
}

export default ButtonItem
