import React, { useState } from "react";
import { useStyles } from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography, Box } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import CloseIcon from '@material-ui/icons/Close';

type IFormInput = {
  email: string;
  password: string;
};

export interface IProps {
  open: boolean;
  closeModal: (e: boolean) => void;
}

const SignIn: React.FC<IProps> = (props) => {
  const { open, closeModal } = props;
  const classes = useStyles();
  const history = useHistory()
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    register,
    clearErrors,
  } = useForm<IFormInput>({
    resolver: yupResolver(VALIDATION.SIGN_IN)
  });

  const onClose = () => {
    reset();
    closeModal(false);
  };

  const submit = (data: IFormInput) => {
    console.log("Form is submited", data);
    clearErrors();
    reset();
  };

  const handleForgetClick = () => {
    closeModal(false)
    history.push('/forgetPass')
  };
 
  return (
    <Dialog
      scroll={"paper"}
      open={open}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.paper }}
      onBackdropClick={onClose}
      onEscapeKeyDown={onClose}
    >
      <DialogContent classes={{ root: classes.root }}>
        <Box className={classes.close} onClick={onClose}><CloseIcon className={classes.closeIcon}/></Box>
        <Typography className={classes.text}>Вход в систему:</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputWrapper}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ onChange, value }) => (
                <InputItem 
                  label = {"Email *"}
                  error={errors.email?.message}
                  onChange ={onChange}
                  value={value}
                  placeholder = 'example@example.com'
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ onChange, value }) => (
                <InputItem 
                  label = {"Пароль *"}
                  onChange ={onChange}
                  value={value}
                  error={errors.password?.message}
                  inputType = {"password"}
                  placeholder = 'Введите пароль'
                />
              )}
            />
          </Box>

          <Box className={classes.textRow}>
            <Typography>Войти с помощью</Typography>
            <Box className={classes.socialBox}>
              VK G FB
            </Box>
          </Box>

          <ButtonItem
            btnType="submit"
            size="large"
            btnColor="orange"
            className={classes.btn}
          >Войти</ButtonItem>
        </form>
        <Typography className={classes.forgetText} onClick={handleForgetClick}>
          Забыли пароль?
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
