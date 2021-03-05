import React, { SyntheticEvent } from "react"
import cn from "classnames"
import { Button } from "@material-ui/core"

import { useStyles } from "./styles"


interface IProps {
    btnType?: "button" | "submit" | "reset";
    variant?: "contained" | "outlined";
    size?: "small" | "medium" | "large";
    className?: string;
    btnColor?: "bg" | "text" | "textActive" | "textGray" | "white" | "yellow";
    fontWeight?: "textBold" | "textNormal";
    disabled?: boolean;
    onClick?: (e: SyntheticEvent) => void;
    children?: React.ReactNode
}


const ButtonItem: React.FC<IProps> = (props: IProps) => {
    const { btnType, className, btnColor, fontWeight, disabled, onClick, variant, size, children } = props
    const classes = useStyles()

    const classText = cn(
        className, classes[btnColor || "bg"]
    )
    
    return (
        <Button type={btnType}
                className={classText}
                disabled={disabled}
                onClick={onClick}
                variant={variant}
                size={size}>
            <span className={classes[fontWeight || "textNormal"]}>{children}</span>
        </Button>
    )
}

export default ButtonItem