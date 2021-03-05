import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputCyrillic from "../../molecules/InputCyrillic";
import PasswordItem from "../../molecules/PasswordItem";
import EmailItem from "../../molecules/EmailItem";  

import PostCodeItem from "../../molecules/PostCodeItem";
import { useStyles } from "./styles";

interface IProps {}

const SignUp: React.FC<IProps> = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Container className={classes.regContainer}>
      <Box className={classes.regBox}>
        <Typography variant="h3" component="h1">Регистрация</Typography>
        <EmailItem />
        <Box className={classes.test}>
          <PasswordItem />
        </Box>
        <InputCyrillic placeholder="Введите фамилию" 
                      label="Фамилия"
                      helperText="Только буквы кириллицы"
                      maxlength={50}/>

        <InputCyrillic placeholder="Введите имя" 
                       label="Имя"
                     helperText="Только буквы кириллицы"
                     maxlength={25}/>

        <InputCyrillic placeholder="Введите отчество" 
                      label="Отчество"
                      helperText="Только буквы кириллицы"
                      maxlength={25}/>
        <InputCyrillic placeholder="Введите город" 
                      label="Город"
                      helperText="Только буквы кириллицы"
                      maxlength={15}/>
        <InputCyrillic placeholder="Введите улицу" 
                      label="Улица"
                      helperText="Только буквы кириллицы"
                      maxlength={25}/>
        <PostCodeItem />
      </Box> 
    </Container>
  );
};

export default SignUp;
