import React from "react";
import { Switch, Route } from "react-router-dom";

import MainRouter from "./MainRouter";
import UserExchangeRouter from "./UserExchangeRouter";
import { routes } from "../index";
import cookie from "../../services/CookieService";
const auth = cookie.get("token");
const AppRoutes = () => (
  <Switch>
    {auth && (
      <Route component={UserExchangeRouter} strict path={routes.userChange} />
    )}
    <Route component={MainRouter} path={routes.main} />
  </Switch>
);

export default AppRoutes;
