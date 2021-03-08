import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import ButtonItem from "../../atoms/ButtonItem";
import SignIn from "../SignIn";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { IMenuItem } from "../../../store/models/menu";
import Logo from '../../../assets/image/LOGO.png';
import MenuItem from "../../atoms/MenuItem";

const getList = (state:RootState) => {
  return state.menu.list
}

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const menu = useSelector(getList);
  
  const handlerClick = (str: string) => {
    history.push(str);
  };

  return (
    <Box className={classes.root}>
      <img src={Logo} alt={"Book exchange Web Site"} className={classes.logo}/>
      <Box className={classes.nav}>
      {!!menu.length &&
          menu.map((item:IMenuItem, index:number) => (
            <MenuItem 
            key={`menus-${index}-link`}
            title= {item.title} 
            link={item.link}
            onClick={() => handlerClick(`${item.link}`)} 
            /> 
            ))}
      </Box>
      <Box className={classes.loginMenu}>
          <SignIn />        
          <Typography
            onClick={(e) => {
              e.preventDefault();
              history.push("/signup");
            }}
          >/ Регистрация</Typography>
      </Box>
    </Box>
  );
};

export default Header;
