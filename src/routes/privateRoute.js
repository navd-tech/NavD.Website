import React from "react";
import { Route } from "react-router-dom";
import { AuthConsumer } from "../providers/authProvider";

const PrivateRoute = ({ component, ...rest }) => {
  const renderFn = Component => props => (
    <AuthConsumer>
      {({ isAuthenticated, signinRedirect }) => {
        if (!!Component && isAuthenticated()) {
          return <Component {...props} />;
        }
          signinRedirect();
          return <span>loading</span>;

      }}
    </AuthConsumer>
  );

  return <Route {...rest} render={renderFn(component)} />;
};

export default PrivateRoute;
