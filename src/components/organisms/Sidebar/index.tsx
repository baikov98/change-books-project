import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import NavItem from "../../atoms/NavItem";
import User from "../../../assets/image/user.png";

import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { getNavList, getUser } from "../../../store/selectors";
import { ReactComponent as StarIcon } from "../../../assets/svg/star.svg";

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const user = useSelector(getUser);
  const nav = useSelector(getNavList);
  useEffect(() => {}, [user])
  return (
    <Box className={classes.root}>
      <Box className={classes.user}>
        <Box className={classes.logo}>
          <img src={User} />
        </Box>
        <Typography className={classes.title}>{user?.nickname}</Typography>
      </Box>

      <Typography className={classes.subtitle}>
        Рейтинг <StarIcon className={classes.icon} viewBox="0 0 16 16" /> {user?.rating || 0}
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
