import React from "react";

import { Switch, Route } from "react-router-dom";
import { routes } from "../index";

import MainPage from "../../pages/MainPage";
import MainLayout from "../../layouts/MainLayout";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import SignUpPage from "../../pages/Auth/SignUpPage";
import ForgetPassPage from "../../pages/Auth/ForgetPassPage";
import StartChangePage from "../../pages/StartChangePage";
import FeedbackPage from "../../pages/FeedbackPage";
import AccessEmailPage from "../../pages/Auth/AccessEmailPage";
import PoliticsPage from "../../pages/PoliticsPage";
import UserChangePage from "../../pages/UserChangePage";

const MainRouter = () => (
  <MainLayout header={<Header />} footer={<Footer />}>
    <Switch>
      <Route component={UserChangePage} strict path={routes.userChange} />
      <Route component={MainPage} exact path={routes.main} />
      <Route component={StartChangePage} exact path={routes.start} />
      <Route component={FeedbackPage} exact path={routes.feedback} />
      <Route component={SignUpPage} exact path={routes.signup} />
      <Route component={ForgetPassPage} exact path={routes.forgetPass} />
      <Route component={AccessEmailPage} exact path={routes.accessEmail} />
      <Route component={PoliticsPage} exact path={routes.politics} />
    </Switch>
  </MainLayout>
);

export default MainRouter;
