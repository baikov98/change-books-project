import React, { useEffect } from "react";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useForm, Controller } from "react-hook-form";

import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { useDispatch } from "react-redux";

interface IProps {
  text: string;
  textTheir: string;
  id: string;
  track_my?: string;
  track_their?: string;
}

type IFormInput = {
  track: string;
};

const ExchangeStatus = 
  ({ text, textTheir, id, track_my, track_their }: IProps) => {
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
  // WAIT_CONFIRM = "Ожидается подтверждение от другого участника."
  // CONFIRMED = "Подтвержден другим участником."
  // WAIT_TRACK_NUMBER = "Подтвержден. Ожидается трэк-номер."
  // DELIVERING = "Доставляется"
  // COMPLETED = "Завершен"

  const handleAgreeExchangeClick = () => {
    dispatch.activeExchange.agreeExchange(id)
  } 
  const submit = (data: IFormInput) => {
    dispatch.activeExchange.trackNumber(id, data.track)
  }
  const handleConfirmRecieveClick = () => {
    dispatch.activeExchange.confirmRecieve(id)
  }

  const test = () => {
    console.log(11)
  }
  switch (text) {
    case 'asd':
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен со стороны данного пользователя ещё не подтверждён.
          </Typography>
        </Box>
      );
    case "Подтвержден другим участником.":
      return (
        <Box className={classes.underBox}>
          <Box>
            <Typography className={classes.warning}>
              Данный пользователь предлагает вам обмен.
            </Typography>
            
          </Box>
          <Box>
            <Typography className={classes.explanation}>
                Готовы обменяться? Для этого вам необходимо отправить ему запрос,
                нажав на кнопку “МЕНЯЮСЬ”
            </Typography>
            <ButtonItem className={classes.btn} type="border" size="medium" 
                        onClick={handleAgreeExchangeClick}>
              МЕНЯЮСЬ
            </ButtonItem>
          </Box>
        </Box>
      );
    case "Ожидается подтверждение от другого участника.":
      return (
        <Box className={classes.underBox}>
          <Typography className={classes.explanation}>
            Когда пользователь согласится на обмен, здесь появится трек номер для
            ввода и отслеживания
          </Typography>
          <Typography className={classes.warning}>
            Вы отправили запрос на обмен.
          </Typography>
        </Box>
      );
    case "Подтвержден. Ожидается трэк-номер.":
      return (
        <Box className={classes.underBox}>
          <Box>
            <Typography className={classes.warning}>
              Обмен подтверждён.
            </Typography>
            <Typography className={classes.explanation}>
              Вам необходимо отправить книгу по адресу, отправленному вам в
              e-mail, после отправки книги введите трек-номер для отслеживания
              посылки (указывается в чеке на почте)
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(submit)}
                className={classes.trackForm}>
            <Controller
                name='track'
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={(props) => (
                  <InputItem
                    placeholder={"00000000"}
                    label={"Трек для отслеживания"}
                    {...props}
                  />
                )}
              />
            <ButtonItem
              className={classes.btnSave}
              btnType="submit"
              type="solid"
              size="large"
            >
              СОХРАНИТЬ
            </ButtonItem>
          </form>
        </Box>
      );
    case "Доставляется":
      if (track_their) {
        if (textTheir === "Доставляется") {
          return (
              <Box className={classes.underBox}>
                <Typography className={classes.explanation}>
                  Трек для отслеживания книги: {track_their}. Не забудьте уведомить
                  нас, когда книга будет получена.
                </Typography>
                <ButtonItem
                  className={classes.btn}
                  btnType="submit"
                  type="solid"
                  size="large"
                  onClick={handleConfirmRecieveClick}
                >
                  КНИГА ПОЛУЧЕНА
                </ButtonItem>
              </Box> 
              );
            } else {
              return <Box className={classes.underBox}>
                <Typography className={classes.warning}>
                  Пользователь еще не подтвердил получение книги
                </Typography>
              </Box>
            }
      } else {
        return (
          <Box className={classes.underBox}>
            <Typography className={classes.explanation}>
              Как только пользователь введет трек-номер он отобразится здесь.
            </Typography>   
            <Typography className={classes.explanation}>
              Вы ввели трекномер: {track_my}
            </Typography>  
          </Box>
        )
      }
      
    case "Завершен":
      return (
      <>
        { textTheir === 'Доставляется' ? 
          <Box className={classes.underBox}>
            <Typography className={classes.explanation}>
              Трек для отслеживания книги: {track_their}. Не забудьте уведомить
              нас, когда книга будет получена.
            </Typography>
            <ButtonItem
              className={classes.btn}
              btnType="submit"
              type="solid"
              size="large"
              onClick={handleConfirmRecieveClick}
            >
              КНИГА ПОЛУЧЕНА
            </ButtonItem>
          </Box> 
          : 
        <Box className={classes.underBox}>
          <Typography className={classes.warning}>
            Обмен завершён
          </Typography>
        </Box> 
        }
      </>
      )
    default:
      return null;
  }
};

export default ExchangeStatus;
