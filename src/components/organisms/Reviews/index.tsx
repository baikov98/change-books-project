import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { getAuthorsList, getBooksByAuthor, getReviewsByBook, getRiviewsError } from "../../../store/selectors";

import ButtonItem from "../../atoms/ButtonItem";
import SelectItem from "../../molecules/SelectItem";
import DialogItem from "../../molecules/DialogItem";
import InputItem from "../../atoms/InputItem";
import ReviewsItem from "../../molecules/ReviewsItem";

type IInputData = {
  author?: string;
  book?: string;
  text?: string;
};

const Reviews: React.FC = () => {
  const classes = useStyles();
  const reviewsList = useSelector(getReviewsByBook);
  const authors = useSelector(getAuthorsList);
  const books = useSelector(getBooksByAuthor);
  const reviewsError = useSelector(getRiviewsError)
  const [step, setStep] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState,
    setError,
    watch,
    setValue,
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
  const watchBook = watch("book");

  useEffect(()=> {
    dispatch.reviews.getAuthors()
  }, [])
  

  useEffect(() => {
    if (!watchBook) {
      return;
    }
    if (step === 3) {
      dispatch.reviews.getReviewsList(watchBook);
    }
  }, [watchBook]);

  useEffect(() => {
    if (!watchAuthor) {
      return;
    }
    setStep(1);
    setValue("book", "");
    setError("book", {
      message: "",
    });
    dispatch.reviews.getBooksName(watchAuthor);
    
  }, [watchAuthor]);

  const submit = (data: IInputData) => {
    if (data) { 
      dispatch.reviews.sendReview(data);
      setStep(1)
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
    dispatch.reviews.getReviewsList(watchBook);
  };

  const handleDialogClick = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <DialogItem
        title={reviewsError ? "Произошла ошибка при отправки отзыва" : "Вы успешно оставили отзыв на книгу!"}
        value={
          reviewsError ? "Попробуйте проверить подключение к интернету и повторите попытку" 
          :
          "Теперь вы можете оставить отзыв на другую книгу или найти отзывы других пользователей"
        }
        open={formState.isSubmitSuccessful}
        onClose={handleDialogClick}
        onClick={handleDialogClick}
      />
    );
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Отзывы на книги</Typography>

      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <Box className={classes.inputRow}>
    
          <SelectItem
            name={"author"}
            control={control}
            defaultValue=""
            required={true}
            label={"Автор книги:"}
            placeholder={"Выбрать"}
            data={authors}
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
              type={checkDisabled() ? "disabled" : "solid"}
              disabled={checkDisabled()}
              onClick={handleVeiwAllClick}
              btnClassName={classes.btn}
            >
              Посмотреть отзыв
            </ButtonItem>
          </Box>
        )}

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

        {step === 3 && (
          <Box className={classes.reviewsWrapper}>
            {reviewsList.length === 0 && (
              <Typography> Отзывов на данную книгу нет</Typography>
            )}

            {!!reviewsList.length && (
              <>
                <Box className={classes.listHeader}>
                  <Typography className={classes.headerItem}>
                    Пользователь
                  </Typography>
                  <Typography className={classes.headerItem}>Дата</Typography>
                  <Typography className={classes.headerItem}>Отзыв</Typography>
                </Box>

                {reviewsList.map((item: any, index: number) => (
                  <ReviewsItem key={`${index}-itemReviews`} data={item} />
                ))}
              </>
            )}
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Reviews;
