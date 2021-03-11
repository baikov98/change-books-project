import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

const OfferUserChange: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Предложения для обмена</Typography>
      </Box>
    </Box>
  );
};

export default OfferUserChange;
