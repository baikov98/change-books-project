import React from "react";
import Header from "../../components/organisms/Header";
import Sidebar from "../../components/organisms/Sidebar";
import SideLayout from "../../layouts/SideLayout";

import { routes } from "../index";
import { Switch, Route } from "react-router-dom";

import GiveUserChangePage from "../../pages/GiveUserChangePage";
import OfferUserChangePage from "../../pages/OfferUserChangePage";
import GetUserChangePage from "../../pages/GetUserChangePage";

const UserChangeRouter = () => (
  <SideLayout header={<Header />} sideBarLeft={<Sidebar />}>
    <Switch>
      <Route component={OfferUserChangePage} exact path={routes.offer} />
      <Route component={GiveUserChangePage} exact path={routes.giveaway} />
      <Route component={GetUserChangePage} exact path={routes.recieve} />
    </Switch>
  </SideLayout>
);

export default UserChangeRouter;
