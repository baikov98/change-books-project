import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputCyrillic from "../../molecules/InputCyrillic";
import PasswordInp from "../../molecules/PasswordInp";
import EmailInp from "../../molecules/EmailInp";  
import NickInp from "../../molecules/NickInp";
import PostCodeInp from "../../molecules/PostCodeInp";
import HouseNumInp from "../../molecules/HouseNumInp";
import { useStyles } from "./styles";

interface IProps {}

const SignUp: React.FC<IProps> = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <Container className={classes.regContainer}>
      <Box className={classes.regBox}>
        <Typography variant="h3" component="h1">Регистрация</Typography>
        <EmailInp />
        <Box className={classes.test}>
          <PasswordInp />
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
        <NickInp />
        <PostCodeInp />
        <HouseNumInp />
      </Box> 
    </Container>
  );
};

export default SignUp;
