import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
}

const EditButton: React.FC<IProps> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Box onClick={onClick} 
         className={classes.editBox}>
      <Box className={classes.icon}></Box>
      <Box className={classes.text}>Редактировать</Box>
    </Box>
  );
};

export default EditButton;
