import React from "react";

import { useStyles } from "./styles";
import { Box, TextField, Typography } from "@material-ui/core";
import {Controller, useForm} from 'react-hook-form'
import ButtonItem from "../../atoms/ButtonItem";

type IFormInput = {
  book: string;
  author: string;
  isbn: string;
  year: string;
};

interface IProps {}

const StartChange: React.FC<IProps> = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm<IFormInput>({});

  const submit = () => {

  }
  
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Мои обмены</Typography>
        <Box className={classes.stepper}> Stepper </Box>
        <form className={classes.form}>
        <Box className={classes.content}>
        

          <Box className={classes.formBox}>
            <Typography>Данные книги</Typography>
              <Controller
                name="author"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={(props) => (
                  <TextField
                  placeholder="Фамилия и имя автора"
                    {...props}
                  />
                )}
              />
                <Controller
                name="book"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={(props) => (
                  <TextField
                  placeholder="Название книги"
                    {...props}
                  />
                )}
              />
                <Controller
                name="isbn"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={(props) => (
                  <TextField
                  placeholder="ISBN"
                    {...props}
                  />
                )}
              />
                <Controller
                name="year"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={(props) => (
                  <TextField
                  placeholder="Год издания"
                    {...props}
                  />
                )}
              />
          </Box>
          <Box className={classes.categoryBox}>
              <Typography>Категории</Typography>
          </Box>
        </Box>
        <Box className={classes.btnBox}>
          <ButtonItem
            value="Далее"
            btnType="submit"
            size="large"
            btnColor="yellow"
            className={classes.btn}
          />  
        </Box>
      </form>
      </Box>
    </Box>
  );
};

export default StartChange;
