import { Box, Typography, TextField} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import {Controller, useForm} from 'react-hook-form'
import ButtonItem from "../../atoms/ButtonItem";

type IFormInput = {
  name: string;
};

interface IProps {}

const ForgetPass: React.FC<IProps> = (props) => {
  const {} = props;
  const classes = useStyles();

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
        <Typography className={classes.title}>Сброс пароля:</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputRow}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <TextField
                  placeholder="Введите свой email"
                  className={classes.input}
                  {...props}
                />
              )}
            />
           
          </Box>

          <Box className={classes.textRow}>
            <Typography>На указанный вами e-mail будет отправлено письмо для сброса пароля</Typography>
          </Box>

          <ButtonItem
            value="Сбросить пароль"
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

export default ForgetPass;
