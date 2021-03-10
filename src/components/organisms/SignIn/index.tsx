import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";

import { Typography, Box } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { useHistory } from "react-router-dom";
import ButtonItem from "../../atoms/ButtonItem";
import InputItem from "../../atoms/InputItem";
import CloseIcon from "@material-ui/icons/Close";
import Popover from "@material-ui/core/Popover";
import SocialItems from "../../atoms/SocialItems";
import { useDispatch } from "react-redux";

type IFormInput = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const history = useHistory();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    register,
    clearErrors,
  } = useForm<IFormInput>({
    resolver: yupResolver(VALIDATION.SIGN_IN),
  });

  const handleClose = () => {
    reset();
    setOpen(false);
    setAnchorEl(null);
  };

  const submit = (data: IFormInput) => {
    clearErrors();
    reset();
    dispatch.user.login(data);
  };

  const handleForgetClick = () => {
    handleClose();
    history.push("/forgetPass");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen((prev) => !prev);
  };

  return (
    <Box className={classes.root}>
      <Typography onClick={handleClick} className={classes.enter}>
        Войти
      </Typography>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.popover }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box className={classes.paper}>
          <Box className={classes.close} onClick={handleClose}>
            <CloseIcon className={classes.closeIcon} />
          </Box>
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
                    label={"Email *"}
                    error={errors.email?.message}
                    onChange={onChange}
                    value={value}
                    placeholder="example@example.com"
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
                    label={"Пароль *"}
                    onChange={onChange}
                    value={value}
                    error={errors.password?.message}
                    inputType={"password"}
                    placeholder="Введите пароль"
                  />
                )}
              />
            </Box>

            <Box className={classes.textRow}>
              <SocialItems title={"Войти с помощью"} />
            </Box>

            <ButtonItem
              btnType="submit"
              size="large"
              type="solid"
              className={classes.btn}
            >
              Войти
            </ButtonItem>
          </form>
          <Typography
            className={classes.forgetText}
            onClick={handleForgetClick}
          >
            Забыли пароль?
          </Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export default SignIn;
