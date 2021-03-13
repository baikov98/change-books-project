import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  gray?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const TitleItem: React.FC<IProps> = ({ children, gray, onClick }) => {
  const classes = useStyles();
  return (
    <Box className={gray ? classes.gray : classes.title}
         onClick={onClick}>
      {children}
    </Box>
  );
};

export default TitleItem;
