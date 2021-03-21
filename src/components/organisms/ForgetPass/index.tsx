import { Box, Typography, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { VALIDATION } from "../../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import { useDispatch, useSelector } from "react-redux";
import { getUserError } from "../../../store/selectors";

type IFormInput = {
  email: string;
};

const ForgetPass: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const resetPassError = useSelector(getUserError);
  const [resetError, setResetError] = useState<boolean>(false);

  const { handleSubmit, control, errors, reset } = useForm<IFormInput>({
    resolver: yupResolver(VALIDATION.RESET_PASS),
  });

  const submit = (data: IFormInput) => {
    reset();
    dispatch.user.resetPassword(data);
    if (resetPassError) {
      setResetError(true);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>
          Восстановление пароля:
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputRow}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={"Email*:"}
                  error={errors.email?.message}
                  placeholder="Введите свой email"
                  {...props}
                />
              )}
            />
          </Box>

          <Box className={classes.textRow}>
            <Typography>
              На указанный вами e-mail будет отправлено письмо для сброса пароля
            </Typography>
          </Box>

          <ButtonItem btnType="submit" size="large" type="solid">
            Сбросить пароль
          </ButtonItem>
        </form>

        {resetPassError && resetError && (
          <Typography className={classes.error}>{resetPassError}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ForgetPass;
