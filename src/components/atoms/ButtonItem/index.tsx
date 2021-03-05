import React from "react";
import cn from "classnames";
import { Button, ButtonBase, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
    btnType?: "button" | "submit" | "reset";
    variant?: "contained" | "outlined";
    size?: "small" | "medium" | "large";
    className?: string;
    btnColor?: "bg" | "text" | "textActive" | "textGray" | "white" | "orange";
    fontWeight?: "textBold" | "textNormal";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}


const ButtonItem: React.FC<IProps> = (props) => {
    const { btnType, className, btnColor, fontWeight, disabled, onClick, variant, size, children } = props
    const classes = useStyles()

    const classText = cn(
        className, classes[btnColor || "bg"]
    )
    
    return (
        <Button
                disableTouchRipple
                disableRipple
                type={btnType}
                className={classText}
                disabled={disabled}
                onClick={onClick}
                variant={variant}
                size={size}>
            <Typography variant={"subtitle1"} className={classes[fontWeight || "textNormal"]}>
                {children}
            </Typography>
        </Button>
    )
}

export default ButtonItem
