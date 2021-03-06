import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter basename='/ReactHooks' >
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
