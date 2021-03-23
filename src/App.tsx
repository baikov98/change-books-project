import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import cookie from "./services/CookieService";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "./store/selectors";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // Успею ли я получить пользователя, что бы выставить флаг isAuth в true
  dispatch.user.checkAuth();
  const auth = useSelector(getAuth);
  console.log("APP is AUTH = ", auth);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container
        maxWidth={false}
        className={classes.root}
        disableGutters
        component={"div"}
      >
        <AppRoutes auth={auth} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
