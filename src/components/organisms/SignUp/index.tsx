import { Box, Typography, TextField, Checkbox } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import cn from "classnames";
import { Controller, useForm } from "react-hook-form";
import ButtonItem from "../../atoms/ButtonItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { IRegFields } from "../../../store/models/regFields";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import SocialItems from "../../atoms/SocialItems";
import CheckBox from "../../atoms/CheckBox";
import {
  getMainInput,
  getAdressInput,
  getUserError,
} from "../../../store/selectors";
import DialogItem from "../../molecules/DialogItem";
import { useHistory } from "react-router-dom";

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

const SignUp: React.FC = () => {
  const classes = useStyles();
  const mainInput = useSelector(getMainInput);
  const adressInput = useSelector(getAdressInput);
  const regError = useSelector(getUserError);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState,
  } = useForm<IFormInput>({
    mode: "onChange",
    resolver: yupResolver(VALIDATION.SIGN_UP),
  });

  const submit = (data: IFormInput) => {
    reset();
    dispatch.user.registration(data);
  };

  const handleDialogClick = () => {
    history.push("/");
  };

  if (formState.isSubmitSuccessful) {
    return (
      <DialogItem
        title={regError ? "Ошибка" : "Спасибо за регистрацию!"}
        value={
          regError
            ? regError
            : "Вам на почту должна придти ссылка на подтверждение регистрации. Проверьте также папку 'Спам'"
        }
        open={formState.isSubmitSuccessful}
        onClose={handleDialogClick}
        onClick={handleDialogClick}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Регистрация:</Typography>
      <Typography className={classes.subtitle}>Основная информация</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <Box className={classes.inputRow}>
          {mainInput.map(
            (
              { name, required, placeholder, label, type, error }: IRegFields,
              index: number
            ) => (
              <Controller
                key={`input-${index}`}
                name={name}
                control={control}
                rules={{ required: required }}
                defaultValue=""
                render={(props) => (
                  <InputItem
                    label={label}
                    inputType={type}
                    error={errors[error]?.message}
                    placeholder={placeholder}
                    {...props}
                  />
                )}
              />
            )
          )}
        </Box>

        <Typography className={classes.subtitle}>Адрес</Typography>
        <Box className={classes.inputRow}>
          {adressInput.map(
            (
              { name, required, placeholder, label, type, error }: IRegFields,
              index: number
            ) => (
              <Controller
                key={`input-adress-${index}`}
                name={name}
                control={control}
                rules={{ required: required }}
                defaultValue=""
                render={(props) => (
                  <InputItem
                    label={label}
                    inputType={type}
                    error={errors[error]?.message}
                    placeholder={placeholder}
                    {...props}
                  />
                )}
              />
            )
          )}
        </Box>
        <Box className={classes.textRow}>
        </Box>
        <Box className={classes.textRow}>
          <Typography>
            Знаком * отмечены все поля, обязательные для заполнения
          </Typography>
        </Box>
        <Box className={classes.textRow}>
          <Typography>
            На указанный вами e-mail будет отправлено письмо для подтверждения
            учётной записи
          </Typography>
        </Box>
        <Box className={classes.textRow}>
          <Controller
            name="terms"
            control={control}
            rules={{ required: true }}
            defaultValue={false}
            render={({ value, onChange }) => (
              <CheckBox
                error={errors.terms?.message}
                label={`Нажимая кнопку "СОЗДАТЬ АККАУНТ" вы соглашаетесь с полититкой хранения и обработки персональных данных 
                  в соответствии с `}
                labelLink={"политикой конфиденциальности"}
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
              />
            )}
          />
        </Box>

        <ButtonItem
          btnType="submit"
          size="large"
          type="solid"
          className={classes.btn}
        >
          Создать аккаунт
        </ButtonItem>
      </form>
    </Box>
  );
};

export default SignUp;
