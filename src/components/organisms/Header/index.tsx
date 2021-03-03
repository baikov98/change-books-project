import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import ButtonItem from "../../atoms/ButtonItem";
import SignIn from "../SignIn";
import { useHistory } from "react-router-dom";
interface IProps {}

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [showSignIn, setShowSignIn] = useState(false);
  const history = useHistory();

  const handleSignIn = () => {
    setShowSignIn(true);
  };

  return (
    <Box className={classes.root}>
      <Typography> Change Books Logo</Typography>
      <Box className={classes.loginMenu}>
        <ButtonItem
          variant="outlined"
          size="large"
          btnColor="white"
          fontWeight="textBold"
          onClick={handleSignIn}
          value="Войти"
        />
        <Box className={classes.regButton}>
          <ButtonItem
            variant="contained"
            size="large"
            btnColor="yellow"
            fontWeight="textBold"
            value="Регистрация"
            onClick={(e) => {
              e.preventDefault();
              history.push("/signup");
            }}
          />
        </Box>
      </Box>
      <SignIn open={showSignIn} closeModal={setShowSignIn} />
    </Box>
  );
};

export default Header;
