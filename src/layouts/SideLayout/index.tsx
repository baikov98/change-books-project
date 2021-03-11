import React, { ReactChild } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

interface IProps {
  sideBarLeft: ReactChild;
  children: ReactChild;
  header: ReactChild;
}

const SideLayout: React.FC<IProps> = ({
  sideBarLeft,
  children,
  header,
}: IProps) => {
  const classes = useStyles();
  return (
    <Grid container component={"div"} className={classes.mainWrapper}>
      <Grid item container className={classes.header} component={"div"}>
        {header}
      </Grid>

      <Grid container component={"div"} className={classes.contentContainer}>
        <Grid item className={classes.sideBarLeft} component={"div"}>
          {sideBarLeft}
        </Grid>
        <Grid item className={classes.content} component={"div"}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideLayout;
