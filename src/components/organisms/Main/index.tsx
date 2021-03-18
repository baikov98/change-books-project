import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";
import main from "../../../assets/image/main.png";

const Main: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const onClick = () => {
    history.push('start')
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.textBlock}>
          <Typography className={classes.title}>
            Book Exchange — сервис обмена книгами
          </Typography>
          <Typography className={classes.subtitle}>
            <span className={classes.bold}>Обмен книгами</span> (буккроссинг) 
            становится всё более популярен. Такой
            обмен даёт шанс бумажным книгам продлить свою жизнь, помогает
            владельцам книг делиться с другими людьми хорошими историями и
            получать новые впечатления.{" "}
          </Typography>
          <Typography className={classes.subtitle}>
            <span className={classes.bold}>Наш сайт предлагает совершить не просто 
            обмен, а добавить к этому
            увлекательному процессу элемент сюрприза.</span> Подбор книг для обмена
            будет выполнен по пожеланиям участников, но только при получении
            станет известно, какая именно книга будет радовать своего владельца.{" "}
          </Typography>
          <Typography className={classes.subtitle}>
            <span className={classes.bold}>Интересно?</span> Тогда начинайте обмен и 
            скорее приглашайте своих друзей поучаствовать!
          </Typography>
          <ButtonItem size="large" type="solid" 
                      className={classes.btn}
                      onClick={onClick}>
            {" "}
            Начать обмен
          </ButtonItem>
        </Box>
        <Box className={classes.imageBlock}>
          <img className={classes.image} src={main} alt="Main picture" />
        </Box>
      </Box>
      <Box className={classes.numContainer}>
          <Box className={classes.containerItem}>
            <Box className={classes.bigNum}>2500</Box>
            <Box className={classes.numText}>
              книг доступно<br/>для обмена<br/>на сервисе 
            </Box>
          </Box>
          <Box className={classes.containerItem}>
            <Box className={classes.bigNum}>900</Box>
            <Box className={classes.numText}>
              довольных<br/>пользователей<br/>сервиса
            </Box>
          </Box>
          <Box className={classes.containerItem}>
            <Box className={classes.bigNum}>12</Box>
            <Box className={classes.numText}>
              дней — средний срок<br/>доставки книги<br/>Почтой России
            </Box>
          </Box>
          <Box className={classes.containerItem}>
            <Box className={classes.bigNum}>27</Box>
            <Box className={classes.numText}>
              жанров книг<br/>доступно<br/>для обмена
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default Main;
