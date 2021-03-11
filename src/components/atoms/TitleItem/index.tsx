import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  text: string;
  gray?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const TitleItem: React.FC<IProps> = ({ text, gray, onClick }) => {
  const classes = useStyles();
  return (
    <Box className={gray ? classes.gray : classes.title}
         onClick={onClick}>
      {text}
    </Box>
  );
};

export default TitleItem;
