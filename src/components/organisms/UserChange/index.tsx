import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
interface IProps {}

const UserChange: React.FC<IProps> = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Бланк обмена</Typography>
      </Box>
    </Box>
  );
};

export default UserChange;
