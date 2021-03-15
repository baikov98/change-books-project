import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import ButtonItem from "../../atoms/ButtonItem";
import { useDispatch } from "react-redux";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

interface IInputData {
  topic: string;
  text: string;
}

const AskQuestion: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState,
  } = useForm<IInputData>({
    mode: "onChange",
    resolver: yupResolver(VALIDATION.ASK_QUESTION),
  });
  const { isDirty: isFormEdited, isValid: isNoErrors } = formState;

  const submit = (data: IInputData) => {
    if (data) {
      dispatch.askQuestion.sendRequest(data);
    }
    reset();
  };

  const checkDisabled = () => {
    return !isFormEdited || !isNoErrors;
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Администрация</Typography>
      <Typography className={classes.subtitle}>Напишите нам:</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
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
                error={errors["topic"]?.message}
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
                error={errors["text"]?.message}
                placeholder={"Текст обращения"}
                multiline
                rows={6}
                {...props}
              />
            )}
          />
        </Box>

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

export default AskQuestion;
