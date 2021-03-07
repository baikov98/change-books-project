import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";
import main from '../../../assets/image/main.png'


const Main: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.textBlock}>
          <Typography className={classes.title}>Пользователи сервиса обмениваются книгами</Typography>
          <Typography className={classes.subtitle}>Пользователь помечает категории, типы, тэги книг, которые бы он хотел получить и такие же характеристики для книг, которые он может отдать. Система подбирает пользователя для обмена и контролирует что обмен состоялся. Система выявляет недобросовестных пользователей и принимает соответствующие меры. </Typography>
          <Typography className={classes.subtitle}>Cервис позволит упростить процесс обмена книгами, сделает его более привлекательным и надежным, будет способствовать привлечению большего количества людей к обмену бумажными книгами.</Typography>
          <ButtonItem className={classes.btn}> Начать обмен</ButtonItem>
        </Box>
        <Box className={classes.imageBlock}>
          <img className={classes.image} src={main} alt="Main picture"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
