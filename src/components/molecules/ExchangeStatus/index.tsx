import React from "react";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";

import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { useDispatch } from "react-redux";

interface IProps {
  text: string;
  track_my?: string;
  track_their?: string;
}

type IFormInput = {
  track: string;
};

const ExchangeStatus = ({ text, track_my, track_their }: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch()
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
    // FREE = "Свободен"
    // WAIT_CONFIRM = "Ожидается подтверждение"
    // CONFIRMED = "Подтвержден"
    // WAIT_TRACK_NUMBER = "Ожидается трэк-номер"
    // DELIVERING = "Доставляется"
    // COMPLETED = "Завершен"


  const handleClick = () => {
    // dispatch
  } 

  switch (text) {
    case 'asd':
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен со стороны данного пользователя ещё не подтверждён!
          </Typography>
        </Box>
      );
    case "Ожидается подтверждение":
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Данный пользователь предлагает вам обмен!
          </Typography>
          <Typography className={classes.explanation}>
            Готовы обменяться? Для этого вам необходимо отправить ему запрос,
            нажав на кнопку “МЕНЯЮСЬ”
          </Typography>
          <ButtonItem className={classes.btn} type="border" size="large" onClick={handleClick}>
            МЕНЯЮСЬ
          </ButtonItem>
        </Box>
      );
    case "Подтвержден":
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
    case "Ожидается трэк-номер":
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
    case "Доставляется23":
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен подтверждён!
          </Typography>
          <Typography className={classes.explanation}>
            Трек для отслеживания книги: {track_their}. Когда пользователь её
            получит, он уведомит систему об этом.
          </Typography>
        </Box>
      );
    case "Доставляется":
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.explanation}>
            Трек для отслеживания книги: {track_their}. Не забудьте уведомить
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
    case "Завершен":
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен завершён
          </Typography>
        </Box>
      )
    default:
      return null;
  }
};

export default ExchangeStatus;
