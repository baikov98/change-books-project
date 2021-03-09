import React from "react";
import cn from "classnames";
import { Box, Typography } from "@material-ui/core";
import vk from "../../../assets/image/vk.png";
import twitter from "../../../assets/image/twitter.png";
import google from "../../../assets/image/google.png";
import facebook from "../../../assets/image/facebook.png";

import { useStyles } from "./styles";

export interface IProps {
  title?: string;
  className?: string;
}

const SocialItems: React.FC<IProps> = ({ title, className }: IProps) => {
  const classes = useStyles();

  const classBox = cn(classes.wrapper, className);
  return (
    <Box className={classBox}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      <Box className={classes.buttons}>
        <img className={classes.btn} src={vk} alt="vk.com" />
        <img className={classes.btn} src={twitter} alt="twitter.com" />
        <img className={classes.btn} src={google} alt="google.com" />
        <img className={classes.btn} src={facebook} alt="facebook.com" />
      </Box>
    </Box>
  );
};

export default SocialItems;
