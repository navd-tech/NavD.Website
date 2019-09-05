import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withOidcSecure } from '@axa-fr/react-oidc-context';
import Admin from "../components/Auth/Admin"
import Dashboard from "../components/Auth/Dashboard"

const Home = () => (
  <h1>We are home!!!!</h1>
)


const Routes = () => (
  <Switch>
    <Route exact path="/account" component={Home} />
    <Route path="/account/dashboard" component={withOidcSecure(Dashboard)} />
    <Route path="/account/admin" component={Admin} />
    <Route path="/account/home" component={Home} />
  </Switch>


);

export default Routes;