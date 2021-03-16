import React from "react";
import { Box, MenuItem, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import ButtonItem from "../../atoms/ButtonItem";
import { useSelector, useDispatch } from "react-redux";
import InputItem from "../../atoms/InputItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import SelectItem from "../../molecules/SelectItem";

type IInputData = {
  author?: string;
  book?: string;
};

const Reviews: React.FC = () => {
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
    // resolver: yupResolver(VALIDATION.PERSONAL_DATA),
  });
  const { isDirty: isFormEdited, isValid: isNoErrors } = formState;

  const submit = (data: IInputData) => {
    if (data) {
      console.log("Data submitted = ", data);
    }
    reset();
  };

  const checkDisabled = () => {
    return !isFormEdited || !isNoErrors;
  };

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
            label={"Название книги:"}
            placeholder={"Выбрать"}
          >
            {/* <MenuItem value="none" disabled>
              Выбрать
            </MenuItem> */}
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </SelectItem>
        </Box>

        <Box className={classes.buttonWrapper}>
          <ButtonItem
            btnType="submit"
            size="large"
            type={checkDisabled() ? "disabled" : "solid"}
            disabled={checkDisabled()}
            btnClassName={classes.btn}
          >
            Оставить отзыв
          </ButtonItem>

          <ButtonItem
            btnType="submit"
            size="large"
            type={"solid"} //checkDisabled() ? "disabled" :
            // disabled={checkDisabled()}
            btnClassName={classes.btn}
          >
            Посмотреть отзыв
          </ButtonItem>
        </Box>
      </form>
    </Box>
  );
};

export default Reviews;
