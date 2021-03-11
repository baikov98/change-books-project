import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const GiveUserChange: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Хочу отдать</Typography>
      </Box>
    </Box>
  );
};

export default GiveUserChange;
