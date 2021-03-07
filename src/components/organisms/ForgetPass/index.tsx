import { Box, Typography, TextField} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { VALIDATION } from "../../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import {Controller, useForm} from 'react-hook-form'
import ButtonItem from "../../atoms/ButtonItem";
import InputItem from '../../atoms/InputItem'

type IFormInput = {
  email: string;
};

const ForgetPass: React.FC = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm<IFormInput>({
    resolver: yupResolver(VALIDATION.RESET_PASS)
  });


  const submit = (data: IFormInput) => {
    console.log("Submitted = ", data)
    reset();
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Восстановление пароля:</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputRow}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={'Email*:'}
                  error={errors.email?.message}
                  placeholder="Введите свой email"
                  {...props}
                />
              )}
            />
           
          </Box>

          <Box className={classes.textRow}>
            <Typography>На указанный вами e-mail будет отправлено письмо для сброса пароля</Typography>
          </Box>

          <ButtonItem
            btnType="submit"
            size="large"
            type="solid"
            onClick={()=> null}
          >Сбросить пароль</ButtonItem>
        </form>
        
      </Box>
    </Box>
  );
};

export default ForgetPass;
