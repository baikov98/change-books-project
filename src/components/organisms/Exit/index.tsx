import React, { useEffect } from "react";

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Exit: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.user.logout();
    history.push("/");
  }, []);

  return <Box className={classes.root}>Выход...</Box>;
};

export default Exit;
