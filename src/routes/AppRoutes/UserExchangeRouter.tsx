import React from "react";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import SideLayout from "../../layouts/SideLayout";

import { routes } from "../index";
import { Switch, Route } from "react-router-dom";

import GiveUserChangePage from "../../pages/GiveUserChangePage";
import OfferUserChangePage from "../../pages/OfferUserChangePage";
import GetUserChangePage from "../../pages/GetUserChangePage";
import ExchangeCardPage from "../../pages/ExchangeCardPage";
import ActiveExchangePage from "../../pages/ActiveExchangePage";
import PersonalDataPage from "../../pages/PersonalDataPage";

const UserChangeRouter = () => (
  <SideLayout header={<Header />} sideBarLeft={<Sidebar />}>
    <Switch>
      <Route component={OfferUserChangePage} exact path={routes.offer} />
      <Route component={GiveUserChangePage} exact path={routes.giveaway} />
      <Route component={GetUserChangePage} exact path={routes.recieve} />
      <Route component={ExchangeCardPage} exact path={routes.exchangeCard} />
      <Route component={ActiveExchangePage} exact path={routes.active} />
      <Route component={ExchangeCardPage} exact path={routes.activeCard} />
      <Route component={PersonalDataPage} exact path={routes.personal} />
    </Switch>
  </SideLayout>
);

export default UserChangeRouter;
