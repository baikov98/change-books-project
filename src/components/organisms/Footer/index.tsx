import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Footer: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handlePolicyClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push("/politics");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
      <Typography>Book Exchange — cервис обмена книгами @ 2021</Typography>
      <Typography className={classes.policy}
                  onClick={handlePolicyClick}>Политика конфиденциальности</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
