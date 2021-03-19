import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
import cookie from "./services/CookieService";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  // if (process.env.NODE_ENV === "development") {
  //   cookie.set("token", "develop", { path: "/" }); //Удалить на продакшене
  // }

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container
        maxWidth={false}
        className={classes.root}
        disableGutters
        component={"div"}
      >
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
