import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import Crumbs from "../../molecules/Crumbs";
import CatAndValue from "../../atoms/CatAndValue";
import ButtonItem from "../../atoms/ButtonItem";

const ExchangeCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  const crumbs = [
    {
      value: "Предложение для обмена",
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
            <Typography className={classes.bookTitle}>Книга</Typography>
            <CatAndValue
              className={classes.catValue}
              category="Пользователь"
              value="Хитрый Перец"
            />
            <CatAndValue
              className={classes.catValue}
              category="Город"
              value="Хабаровск"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
            />
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
            <Typography className={classes.bookTitle}>Книга</Typography>
            <CatAndValue
              className={classes.catValue}
              category="Пользователь"
              value="Хитрый Перец"
            />
            <CatAndValue
              className={classes.catValue}
              category="Город"
              value="Хабаровск"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
            />
            <CatAndValue
              className={classes.catValue}
              category="Рейтинг"
              value="4.7"
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
