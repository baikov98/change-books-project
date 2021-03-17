import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { useHistory } from "react-router-dom";
import { getBooksByAuthor } from "../../../store/selectors";

import ButtonItem from "../../atoms/ButtonItem";
import SelectItem from "../../molecules/SelectItem";
import DialogItem from "../../molecules/DialogItem";
import InputItem from "../../atoms/InputItem";

type IInputData = {
  author?: string;
  book?: string;
  text?: string;
};

const Reviews: React.FC = () => {
  const classes = useStyles();
  const [step, setStep] = useState<Number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector(getBooksByAuthor);

  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState,
    setError,
    watch,
  } = useForm<IInputData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver:
      step === 1
        ? yupResolver(VALIDATION.REVIEW.STEP_1)
        : yupResolver(VALIDATION.REVIEW.STEP_2),
  });
  const { isDirty: isFormEdited, isValid: isNoErrors } = formState;
  const watchAuthor = watch("author");

  //Для ожидания остановки печатания 2 сек
  useEffect(() => {
    const delayTyping = setTimeout(() => {
      console.log(watchAuthor);
      setError("book", {
        message: "",
      });
      dispatch.reviews.getBooksName(watchAuthor);
    }, 2000);

    return () => clearTimeout(delayTyping);
  }, [watchAuthor]);

  const submit = (data: IInputData) => {
    if (data) {
      console.log("Data submitted = ", data);
      setStep(1);
      setOpen(true);
    }
    reset();
  };

  const checkDisabled = () => {
    return !isFormEdited || !isNoErrors;
  };

  const handleStayReviewClick = () => {
    setStep(2);
    setError("text", {
      message: "",
    });
  };

  const handleVeiwAllClick = () => {
    setStep(3);
  };

  const handleDialogClick = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <DialogItem
        title={"Вы успешно оставили отзыв на книгу!"}
        value={
          "Теперь вы можете оставить отзыв на другую книгу или найти отзывы других пользователей"
        }
        open={formState.isSubmitSuccessful}
        onClose={handleDialogClick}
        onClick={handleDialogClick}
      />
    );
  }

  console.log("Errors = ", errors);
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Отзывы на книги</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <Box className={classes.inputRow}>
          <Controller
            name={"author"}
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={(props) => (
              <InputItem
                label={"Автор книги:"}
                inputType={"text"}
                error={errors.author?.message}
                placeholder={"Автор книги"}
                {...props}
              />
            )}
          />

          <SelectItem
            name={"book"}
            control={control}
            defaultValue=""
            required={true}
            label={"Название книги:"}
            placeholder={"Выбрать"}
            data={books}
          />
        </Box>

        {step === 2 && (
          <>
            <Controller
              name={"text"}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={"Отзыв*:"}
                  inputType={"text"}
                  error={errors.text?.message}
                  placeholder={"Ваш отзыв о книге"}
                  multiline
                  rows={6}
                  {...props}
                />
              )}
            />

            <ButtonItem
              btnType="submit"
              size="large"
              type={checkDisabled() ? "disabled" : "solid"}
              disabled={checkDisabled()}
              btnClassName={classes.btnSend}
            >
              Отправить
            </ButtonItem>
          </>
        )}

        {step === 1 && (
          <Box className={classes.buttonWrapper}>
            <ButtonItem
              btnType="button"
              size="large"
              type={checkDisabled() ? "disabled" : "solid"}
              disabled={checkDisabled()}
              btnClassName={classes.btn}
              onClick={handleStayReviewClick}
            >
              Оставить отзыв
            </ButtonItem>

            <ButtonItem
              btnType="button"
              size="large"
              type={checkDisabled() ? "disabled" : "solid"} //
              disabled={checkDisabled()}
              onClick={handleVeiwAllClick}
              btnClassName={classes.btn}
            >
              Посмотреть отзыв
            </ButtonItem>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Reviews;
