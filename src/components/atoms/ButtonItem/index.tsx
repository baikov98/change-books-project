import React from "react";
import cn from "classnames";
import { Button } from "@material-ui/core";

import { useStyles } from "./styles";

interface IProps {
  btnType?: "button" | "submit" | "reset" | undefined;
  variant?: "contained" | "outlined" | undefined;
  size?: "small" | "medium" | "large";
  className?: string;
  btnColor?: "bg" | "text" | "textActive" | "textGray" | "white" | "yellow";
  fontWeight?: "textBold" | "textNormal";
  disabled?: boolean;
  onClick?: (e: any) => void;
  value?: string;
}

const defaultProps: IProps = {
  btnType: "button",
  variant: undefined,
  size: "medium",
  className: "",
  btnColor: "bg",
  fontWeight: "textNormal",
  disabled: false,
  onClick: () => null,
  value: "",
};

const ButtonItem: React.FC<IProps> = (props: IProps) => {
  const {
    btnType,
    className,
    btnColor,
    fontWeight,
    disabled,
    onClick,
    variant,
    size,
    value,
  } = props;
  const classes = useStyles();

  const classText = cn(className, classes[btnColor || "bg"]);

  return (
    <Button
      type={btnType}
      className={classText}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      <span className={classes[fontWeight || "textNormal"]}>{value}</span>
    </Button>
  );
};

ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
