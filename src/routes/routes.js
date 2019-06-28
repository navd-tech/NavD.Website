import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Callback } from "../components/auth/callback";
import { Logout } from "../components/auth/logout";
import { LogoutCallback } from "../components/auth/logoutCallback";
import PrivateRoute from "./privateRoute";
import { Register } from "../components/auth/register";
import { SilentRenew } from "../components/auth/silentRenew";
import { PublicPage } from "../components/publicPage";
import { PrivatePage } from "../components/privatePage";

const Routes = (
  <>
    <Link to="/">Public</Link>{' '}
    <Link to="/private">Private</Link>{' '}
    <Link to="/silentrenew">Silent Renew</Link>{' '}
    <Link to="//:lng(en|es|de|fr|pt|it)/register/:form?">Register</Link>{' '}
    <Link to="/logout/callback">Logout Callback</Link>{' '}
    <Link to="/logout">Logout</Link>{' '}
    <Link to="/signin-oidc">Sign In</Link>
    <br />
    <Switch>
      <Route exact path="/signin-oidc" component={Callback} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/logout/callback" component={LogoutCallback} />
      <Route
        exact
        path="/:lng(en|es|de|fr|pt|it)/register/:form?"
        component={Register}
      />
      <Route exact path="/silentrenew" component={SilentRenew} />
      <PrivateRoute path="/private" component={PrivatePage} />
      <Route path="/" component={PublicPage} />
    </Switch>
  </>
);

export default Routes
