import React, { useState } from "react";
import { useStyles } from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography, ButtonBase, Box, Input } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { VALIDATION } from "../../../constants";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";

type IFormInput = {
  email: string;
  password: string;
  currentEmail: string;
  newPassword: string;
  confirmNewPassword: string;
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
    clearErrors,
  } = useForm<IFormInput>({});

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
      ref={() => null}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.paper }}
      onBackdropClick={onClose}
      onEscapeKeyDown={onClose}
    >
      <DialogContent classes={{ root: classes.root }}>
        <Box className={classes.close}>X</Box>
        <Typography className={classes.text}>Вход в систему:</Typography>

        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Box className={classes.inputWrapper}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <Input
                  placeholder="example@example.com"
                  className={classes.input}
                  {...props}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ onChange, value }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  className={classes.input}
                  type={"password"}
                  placeholder="Введите пароль"
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
            value="Войти"
            btnType="submit"
            size="large"
            btnColor="yellow"
            className={classes.btn}
          />
        </form>
        <Typography className={classes.forgetText} onClick={handleForgetClick}>
          Забыли пароль?
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
