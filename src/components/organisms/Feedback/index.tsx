import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

import cookie from "../../../services/CookieService";
import InputItem from "../../atoms/InputItem";
import ButtonItem from "../../atoms/ButtonItem";
import CheckBox from "../../atoms/CheckBox";
import DialogItem from "../../molecules/DialogItem";
import { useHistory } from "react-router";
import { getAuth } from "../../../store/selectors";

interface IInputData {
  name?: string;
  secondName?: string;
  email?: string;
  topic: string;
  text: string;
  terms?: string;
}

const Feedback: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const history = useHistory();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState,
  } = useForm<IInputData>({
    mode: "onChange",
    resolver: !auth
      ? yupResolver(VALIDATION.FEEDBACK.NOT_AUTH)
      : yupResolver(VALIDATION.FEEDBACK.AUTH),
  });
  const { isDirty: isFormEdited, isValid: isNoErrors } = formState;

  const submit = (data: IInputData) => {
    if (data) {
      dispatch.feedBack.sendRequest(data);
    }
    reset();
  };

  const checkDisabled = () => {
    return !isFormEdited || !isNoErrors;
  };

  const handleDialogClick = () => {
    history.push("/");
  };

  if (formState.isSubmitSuccessful) {
    return (
      <DialogItem
        title={"Ваше обращение отправлено. Спасибо!"}
        value={"Ожидайте ответа на почте."}
        open={formState.isSubmitSuccessful}
        onClose={handleDialogClick}
        onClick={handleDialogClick}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Обратная связь</Typography>
      <Typography className={classes.subtitle}>Напишите нам!</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        {!auth && (
          <Box className={classes.inputRowThree}>
            <Controller
              name={"secondName"}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={"Фамилия*:"}
                  inputType={"text"}
                  error={errors.secondName?.message}
                  placeholder={"Фамилия"}
                  {...props}
                />
              )}
            />
            <Controller
              name={"name"}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={"Имя*:"}
                  inputType={"text"}
                  error={errors.name?.message}
                  placeholder={"Имя"}
                  {...props}
                />
              )}
            />
            <Controller
              name={"email"}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={"Email*:"}
                  inputType={"text"}
                  error={errors.email?.message}
                  placeholder={"example@example.com"}
                  {...props}
                />
              )}
            />
          </Box>
        )}

        <Box className={classes.inputRow}>
          <Controller
            name={"topic"}
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={(props) => (
              <InputItem
                label={"Тема обращения*:"}
                inputType={"text"}
                error={errors.topic?.message}
                placeholder={"Тема обращения"}
                {...props}
              />
            )}
          />
        </Box>

        <Box className={classes.inputRow}>
          <Controller
            name={"text"}
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={(props) => (
              <InputItem
                label={"Текст обращения*:"}
                inputType={"text"}
                error={errors.text?.message}
                placeholder={"Текст обращения"}
                multiline
                rows={6}
                {...props}
              />
            )}
          />
        </Box>

        {!auth && (
          <>
            <Box className={classes.textRow}>
              <Typography>
                На указанный вами e-mail будет отправлено письмо с ответом на
                обращение
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
                    label={`Нажимая кнопку "ОТПРАВИТЬ" вы соглашаетесь с полититкой хранения и обработки персональных данных 
                  в соответствии с `}
                    labelLink={"политикой конфиденциальности"}
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            </Box>
          </>
        )}

        <ButtonItem
          btnType="submit"
          size="large"
          type={checkDisabled() ? "disabled" : "solid"}
          disabled={checkDisabled()}
          btnClassName={classes.btn}
        >
          Отправить
        </ButtonItem>
      </form>
    </Box>
  );
};

export default Feedback;
