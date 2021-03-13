import React from "react";
import cn from "classnames";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useStyles } from "./styles";

interface IProps {
  btnType?: "button" | "submit" | "reset";
  size: "small" | "medium" | "large";
  className?: string;
  btnClassName?: string;
  type: "solid" | "border" | "back" | "forward" | "disabled";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ButtonItem: React.FC<IProps> = ({
  btnType,
  className,
  btnClassName,
  disabled,
  onClick,
  size = "large",
  children,
  type = "solid",
}) => {
  const classes = useStyles();

  const classText = cn(classes.text, classes[type || "solid"], className);
  const classButton = cn(classes.button, btnClassName);

  return (
    <Button
      disableTouchRipple
      disableRipple
      type={btnType}
      className={classButton}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      <Typography variant={"subtitle1"} className={classText}>
        {type === "back" && <ArrowBackIcon className={classes.icon} />}
        {children}
        {type === "forward" && <ArrowForwardIcon className={classes.icon} />}
      </Typography>
    </Button>
  );
};

export default ButtonItem;
