import React from 'react';
import { Switch, Route } from "react-router";
import routes from "./routes";
import Header from "./components/Header";
import Page from "./components/Page";

export default () =>
  <Page>
    <Header />
    <Switch>
      <Route exact path="/" component={routes.Home} />
      <Route exact path="/listings" component={routes.Listings} />
    </Switch>
  </Page>
