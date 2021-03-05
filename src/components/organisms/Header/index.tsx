import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import ButtonItem from '../../atoms/ButtonItem'

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography> Change Books Logo</Typography>
      <Box className={classes.loginMenu}>
        <ButtonItem variant="outlined"
                    size="large"
                    btnColor="white"
                    fontWeight="textBold"
                    onClick={()=> null}
                    >Войти</ButtonItem>
        <Box className={classes.regButton}>
        <ButtonItem variant="contained"
                      size="large"
                      btnColor="yellow"
                      fontWeight="textBold"
                      onClick={()=> null}>Регистрация</ButtonItem> 
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
