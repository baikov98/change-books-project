import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import PasswordItem from "../../molecules/PasswordItem";
import EmailItem from "../../molecules/EmailItem"; 
import NameItem from "../../molecules/NameItem"; 
import SurnameItem from "../../molecules/SurnameItem"; 
import PatronymicItem from "../../molecules/PatronymicItem";
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
        <PasswordItem />
        <NameItem />
        <SurnameItem />
        <PatronymicItem />
        <PostCodeItem />
      </Box> 
    </Container>
  );
};

export default SignUp;
