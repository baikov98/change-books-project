import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";
import { activeLink } from "./styles";

interface IProps {
  title?: string;
  link: string;
  className?: string;
}

const MenuItem: React.FC<IProps> = ({
  title,
  link = "/",
  className,
}: IProps) => {
  const classes = useStyles();
  const classText = cn(classes.link, className);

  return (
    <NavLink
      exact
      to={`${link}`}
      activeStyle={activeLink}
      className={classText}
    >
      {title}
    </NavLink>
  );
};

export default MenuItem;
