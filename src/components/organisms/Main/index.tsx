import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";


const getList = (state:RootState) => {
  return state.menu.list
}
const Main: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const menu = useSelector(getList);

  const handlerClick = (str: string) => {
    history.push(str);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Change Books- сервис обмена книгами</Typography>
      </Box>
    </Box>
  );
};

export default Main;
