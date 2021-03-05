import React, { ReactChild } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

interface IProps {
  header: ReactChild;
}

const MainLayout: React.FC<IProps> = (props) => {
  const { header, children } = props;

  const classes = useStyles();
  return (
    <Grid container component={"div"} className={classes.mainWrapper}>
      <Grid item container className={classes.header} component={"div"}>
        {header}
      </Grid>
      <Grid item className={classes.content} component={"div"}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
