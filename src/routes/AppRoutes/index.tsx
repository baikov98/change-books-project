import React from "react";

import { Switch, Route } from "react-router-dom";
import { routes } from "../index";

import MainPage from "../../pages/MainPage";
import MainLayout from "../../layouts/MainLayout";
import Header from "../../components/organisms/Header";

const AppRoutes = () => (
  <MainLayout header={<Header />}>
    <Switch>
      <Route component={MainPage} exact path={routes.main} />
      <Route component={MainPage} exact path={routes.start} />
      <Route component={MainPage} exact path={routes.userChange} />
      <Route component={MainPage} exact path={routes.feedback} />
    </Switch>
  </MainLayout>
);

export default AppRoutes;
