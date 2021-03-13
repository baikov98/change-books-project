import React from "react";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";

import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

interface IProps {
  id: number;
}

type IFormInput = {
  track: string;
};

const ExchangeStatus = ({ id }: IProps) => {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm<IFormInput>({
    resolver: yupResolver(VALIDATION.TRACKING),
  });

  switch (id) {
    case 1:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен со стороны данного пользователя ещё не подтверждён!
          </Typography>
        </Box>
      );
    case 2:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Данный пользователь предлагает вам обмен!
          </Typography>
          <Typography className={classes.explanation}>
            Готовы обменяться? Для этого вам необходимо отправить ему запрос,
            нажав на кнопку “МЕНЯЮСЬ”
          </Typography>
          <ButtonItem className={classes.btn} type="border" size="large">
            МЕНЯЮСЬ
          </ButtonItem>
        </Box>
      );
    case 3:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен подтверждён!
          </Typography>
          <Typography className={classes.explanation}>
            Когда пользователь отправит вам книгу, здесь появится трек для
            отслеживания
          </Typography>
        </Box>
      );
    case 4:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен подтверждён!
          </Typography>
          <Typography className={classes.explanation}>
            Вам необходимо отправить книгу по адресу, отправленному вам в
            e-mail, после отправки книги введите трек-номер для отслеживания
            посылки (указывается в чеке на почте)
          </Typography>
          <form>
            <InputItem
              onChange={() => null}
              value={""}
              placeholder={"00000000"}
              label={"Трек для отслеживания"}
            />
            <ButtonItem
              className={classes.btn}
              btnType="submit"
              type="solid"
              size="large"
            >
              СОХРАНИТЬ
            </ButtonItem>
          </form>
        </Box>
      );
    case 5:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен подтверждён!
          </Typography>
          <Typography className={classes.explanation}>
            Трек для отслеживания книги: 34567890123412. Когда пользователь её
            получит, он уведомит систему об этом.
          </Typography>
        </Box>
      );
    case 6:
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен подтверждён!
          </Typography>
          <Typography className={classes.explanation}>
            Трек для отслеживания книги: 12345678901234. Не забудьте уведомить
            нас, когда книга будет поучена!
          </Typography>
          <ButtonItem
            className={classes.btn}
            btnType="submit"
            type="solid"
            size="large"
          >
            КНИГА ПОЛУЧЕНА
          </ButtonItem>
        </Box>
      );
    default:
      return null;
  }
};

export default ExchangeStatus;
