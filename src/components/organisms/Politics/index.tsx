import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const Politics: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        Политика конфиденциальности
      </Typography>
    </Box>
  );
};

export default Politics;
