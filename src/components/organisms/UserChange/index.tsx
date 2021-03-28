import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserChange: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEnterClick = () => {
    dispatch.menu.SET_MODAL(true);
  };
  const handleRegClick = () => {
    history.push("/signup");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}></Typography>
        <Typography className={classes.subtitle}>
          Вы не авторизованы!
        </Typography>
        <Typography>
          Для того, чтобы продолжить, вам необходимо{" "}
          <span className={classes.link} onClick={handleEnterClick}>
            войти
          </span>{" "}
          или{" "}
          <span className={classes.link} onClick={handleRegClick}>
            зарегистрироваться
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserChange;
