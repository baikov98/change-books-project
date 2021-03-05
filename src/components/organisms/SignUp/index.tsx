import { Box, Typography, TextField, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import {Controller, useForm} from 'react-hook-form'
import ButtonItem from "../../atoms/ButtonItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

type IFormInput = {
  name: string;
  secondName: string;
  thirdName: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  indexLocation: string;
  city: string;
  street: string;
  homeNumber: string;
  buildNumber: string;
  flatNumber: string;
  terms: boolean;
};

interface IProps {}

const SignUp: React.FC<IProps> = (props) => {
  const {} = props;
  const classes = useStyles();
  const mainInput = useSelector((state: RootState) => state.regFields.main)
  const adressInput = useSelector((state: RootState) => state.regFields.adress);

  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm<IFormInput>({});


  const submit = (data: IFormInput) => {
    console.log("Submitted = ", data)
    reset();
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Регистрация:</Typography>
        <Typography className={classes.subtitle}>Основная информация</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputRow}>
            {mainInput.map((item, index) => (
              <Controller
              key={`input-${index}`}
              name={item.name}
              control={control}
              rules={{ required: item.required }}
              defaultValue=""
              render={(props) => (
                <TextField
                  placeholder={item.placeholder}
                  className={classes.input}
                  {...props}
                />
              )}
            />
            ))}
          </Box>

          <Typography className={classes.subtitle}>Адрес</Typography>
          <Box className={classes.inputRow}>
          {adressInput.map((item, index) => (
              <Controller
              key={`input-adress-${index}`}
              name={item.name}
              control={control}
              rules={{ required: item.required }}
              defaultValue=""
              render={(props) => (
                <TextField
                  placeholder={item.placeholder}
                  className={classes.input}
                  {...props}
                />
              )}
            />
            ))}
          </Box>
          <Box className={classes.textRow}>
            <Typography>Зарегистрироваться с помощью</Typography>
            <Box className={classes.socialBox}>
              VK G FB
            </Box>
          </Box>
          <Box className={classes.textRow}>
            <Typography>Знаком * отмечены все поля, обязательные для заполнения</Typography>
          </Box>
          <Box className={classes.textRow}>
            <Typography>На указанный вами e-mail будет отправлено письмо для подтверждения учётной записи</Typography>
          </Box>
          <Box className={classes.textRow}>
          <Controller
              name="terms"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <Checkbox
                  {...props}
                />
              )}
            />
            <Typography>Нажимая кнопку "СОЗДАТЬ АККАУНТ" вы соглашаетесь с полититкой хранения и обработки персональных данных 
              в соответствии с политикой конфиденциальности данных
            </Typography>
          </Box>
          

          <ButtonItem
            value="Создать аккаунт"
            btnType="submit"
            size="large"
            btnColor="yellow"
            className={classes.btn}
          />
        </form>
        
      </Box>
    </Box>
  );
};

export default SignUp;
