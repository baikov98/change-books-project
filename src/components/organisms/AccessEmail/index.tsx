import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import ButtonItem from "../../atoms/ButtonItem";

const AccessEmail: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  dispatch.user.activationAccount(params);

  const handleClick = () => {
    history.push("/start");
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        Ваш e-mail успешно подтверждён!
      </Typography>
      <ButtonItem
        size="large"
        type="solid"
        btnClassName={classes.btn}
        onClick={handleClick}
      >
        Начать обмен
      </ButtonItem>
    </Box>
  );
};

export default AccessEmail;
