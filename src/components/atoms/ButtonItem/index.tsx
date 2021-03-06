import React from "react";
import cn from "classnames";
import { Button, ButtonBase, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

export interface IProps {
    btnType?: "button" | "submit" | "reset";
    variant?: "contained" | "outlined";
    size?: "small" | "medium" | "large";
    className?: string;
    btnColor?: "white" | "orange";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}


const ButtonItem: React.FC<IProps> = (props) => {
    const { btnType, className, disabled, onClick, variant, size, children } = props
    const classes = useStyles(props)

    const classText = cn(classes.text, className)
    return (
        <Button
                disableTouchRipple
                disableRipple
                type={btnType}
                className={classes.button}
                disabled={disabled}
                onClick={onClick}
                variant={variant}
                size={size}>
                
            <Typography variant={"subtitle1"} className={classText}>
                {children}
            </Typography>
        </Button>
    )
}

export default ButtonItem
