import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
interface IProps {}

const Main: React.FC<IProps> = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Change Books- сервис обмена книгами</Typography>
      </Box>
    </Box>
  );
};

export default Main;
