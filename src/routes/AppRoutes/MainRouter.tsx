import React from "react";

import { Switch, Route } from "react-router-dom";
import { routes } from "../index";

import MainPage from "../../pages/MainPage";
import MainLayout from "../../layouts/MainLayout";
import Header from "../../components/organisms/Header";
import SignUpPage from "../../pages/Auth/SignUpPage";
import ForgetPassPage from "../../pages/Auth/ForgetPassPage";
import StartChangePage from "../../pages/StartChangePage";
import FeedbackPage from "../../pages/FeedbackPage";

const MainRouter = () => (
  <MainLayout header={<Header />}>
    <Switch>
      <Route component={MainPage} exact path={routes.main} />
      <Route component={StartChangePage} exact path={routes.start} />
      <Route component={FeedbackPage} exact path={routes.feedback} />
      <Route component={SignUpPage} exact path={routes.signup} />
      <Route component={ForgetPassPage} exact path={routes.forgetPass} />
    </Switch>
  </MainLayout>
);

export default MainRouter;
