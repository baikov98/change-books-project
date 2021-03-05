import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import ButtonItem from "../../atoms/ButtonItem";
import SignIn from "../SignIn";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { IMenuItem } from "../../../store/models/menu";

const getList = (state:RootState) => {
  return state.menu.list
}

const Header: React.FC = () => {
  const classes = useStyles();
  const [showSignIn, setShowSignIn] = useState(false);
  const history = useHistory();
  const menu = useSelector(getList);
  
  const handleSignIn = () => {
    setShowSignIn(true);
  };

  const handlerClick = (str: string) => {
    history.push(str);
  };


  return (
    <Box className={classes.root}>
      <Typography> Change Books Logo</Typography>
      <Box className={classes.nav}>
      {!!menu.length &&
          menu.map((item:IMenuItem, index:number) => (
            <Typography 
            key={`menus-${index}-link`}
            className={classes.link}
            onClick={() => handlerClick(`${item.link}`)} > 
              {item.title} 
            </Typography>
            ))}
      </Box>
      <Box className={classes.loginMenu}>
        <ButtonItem
          variant="outlined"
          size="large"
          btnColor="white"
          fontWeight="textBold"
          onClick={handleSignIn}
        > Войти</ButtonItem>
        <Box className={classes.regButton}>
          <ButtonItem
            variant="contained"
            size="large"
            btnColor="orange"
            fontWeight="textBold"
            onClick={(e) => {
              e.preventDefault();
              history.push("/signup");
            }}
          >Регистрация</ButtonItem>
        </Box>
      </Box>
      <SignIn open={showSignIn} closeModal={setShowSignIn} />
    </Box>
  );
};

export default Header;
