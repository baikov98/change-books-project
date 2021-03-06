import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";


const Main: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
        <Typography>Change Books- сервис обмена книгами</Typography>
    </Box>
  );
};

export default Main;
