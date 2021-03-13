import React from "react";
import Box from "@material-ui/core/Box";
import NavItem from "../../atoms/NavItem";
import User from "../../../assets/image/user.png";

import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { getNavList } from "../../../store/selectors";
import { ReactComponent as StarIcon } from "../../../assets/svg/star.svg";

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const nav = useSelector(getNavList);

  return (
    <Box className={classes.root}>
      <Box className={classes.user}>
        <Box className={classes.logo}>
          <img src={User} />
        </Box>
        <Typography className={classes.title}>Смелый заяц</Typography>
      </Box>

      <Typography className={classes.subtitle}>
        Рейтинг <StarIcon className={classes.icon} viewBox="0 0 16 16" /> 4,8
      </Typography>
      <Box className={classes.nav}>
        {nav.map((item, index) => (
          <NavItem
            key={`navItem-${index}`}
            link={item.link}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;