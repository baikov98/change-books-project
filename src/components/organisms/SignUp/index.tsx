import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";

interface IProps {}

const SignUp: React.FC<IProps> = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Box>
      <Typography>Регистрация</Typography>
    </Box>
  );
};

export default SignUp;
