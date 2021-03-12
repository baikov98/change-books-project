import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBookInfo } from "../../../store/selectors";

import Crumbs from "../../molecules/Crumbs";
import ButtonItem from "../../atoms/ButtonItem";
import BookList from "../../molecules/BookList";

const ExchangeCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = useSelector(getBookInfo);

  const type = () => {
    const value = location.pathname.split("/").indexOf("offer");
    return value !== -1 ? "Предложение для обмена" : "Активные обмены";
  };

  const crumbs = [
    {
      value: type(),
      link: location.pathname.split("/").splice(0, 3).join("/"),
    },
    { value: "Карточка обмена", link: location.pathname },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        <Box className={classes.content}>
          <Box className={classes.book}>
            <Typography className={classes.title}>
              Хочу получить (полное совпадение)
            </Typography>
            <BookList data={data} title={"Книга"} />
            <Box className={classes.underBox}>
              <Typography className={classes.warning}>
                Обмен со стороны данного пользователя ещё не подтверждён!
              </Typography>
              <Typography className={classes.explanation}>
                Готовы обменяться? Для этого вам необходимо отправить ему
                запрос, нажав на кнопку “МЕНЯЮСЬ”
              </Typography>
            </Box>
          </Box>

          <Box className={classes.book}>
            <Typography className={classes.title}>
              Хочу отдать (полное совпадение)
            </Typography>
            <BookList
              data={data}
              title={"Джоан Роулинг “Гарри Поттер и Дары Смерти”"}
            />
            <Box className={classes.underBox}>
              <ButtonItem type="border" size="large">
                МЕНЯЮСЬ
              </ButtonItem>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangeCard;
