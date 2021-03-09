import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";
import main from "../../../assets/image/main.png";

const Main: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.textBlock}>
          <Typography className={classes.title}>
            Book Exchange — сервис обмена книгами
          </Typography>
          <Typography className={classes.subtitle}>
            Обмен книгами (буккроссинг) становится всё более популярен. Такой
            обмен даёт шанс бумажным книгам продлить свою жизнь, помогает
            владельцам книг делиться с другими людьми хорошими историями и
            получать новые впечатления.{" "}
          </Typography>
          <Typography className={classes.subtitle}>
            Наш сайт предлагает совершить не просто обмен, а добавить к этому
            увлекательному процессу элемент сюрприза. Подбор книг для обмена
            будет выполнен по пожеланиям участников, но только при получении
            станет известно, какая именно книга будет радовать своего владельца.{" "}
          </Typography>
          <Typography className={classes.subtitle}>
            Интересно? Тогда начинайте обмен и скорее приглашайте своих друзей
            поучаствовать!
          </Typography>
          <ButtonItem size="large" type="solid" className={classes.btn}>
            {" "}
            Начать обмен
          </ButtonItem>
        </Box>
        <Box className={classes.imageBlock}>
          <img className={classes.image} src={main} alt="Main picture" />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
