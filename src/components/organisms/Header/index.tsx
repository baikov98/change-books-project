import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import SignIn from "../SignIn";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getList, getUser, getAuth } from "../../../store/selectors";
import { IMenuItem } from "../../../store/models/menu";
import Logo from "../../../assets/image/LOGO.png";
import MenuItem from "../../atoms/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const menu = useSelector(getList);
  const user = useSelector(getUser);
  const auth = useSelector(getAuth);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push("/signup");
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <Box className={classes.root}>
      <img src={Logo} alt={"Book exchange Web Site"} 
            className={classes.logo}
            onClick={handleLogoClick} />
      <Box className={classes.nav}>
        {!!menu.length &&
          menu.map((item: IMenuItem, index: number) => (
            <MenuItem
              key={`menus-${index}-link`}
              title={item.title}
              link={item.link}
            />
          ))}
      </Box>
      {!auth && (
        <Box className={classes.loginMenu}>
          <SignIn />
          <Typography onClick={(event) => handleClick(event)}>
            / Регистрация
          </Typography>
        </Box>
      )}
      {auth && (
        <Box className={classes.loginMenu}>
          <AccountCircleIcon fontSize={"small"} />
          <Typography className={classes.nick}>{user?.nickname || " UserName"}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Header;
