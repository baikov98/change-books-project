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
        <Grid item xs={3} className={classes.sideBarLeft} component={"div"}>
          {sideBarLeft}
        </Grid>
        <Grid item xs={9} className={classes.content} component={"div"}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideLayout;
