import React from 'react';
import { AuthenticationConsumer } from '@axa-fr/react-oidc-context';
import {Link, withRouter } from 'react-router-dom';


export default withRouter(props => {

  const handleLogout = (logoutFn) => () => {
    props.history.push('/'); // unprotected route
    logoutFn()
  }

  return (
    <header>
      <AuthenticationConsumer>
        {props => {
          return (
            <div>
              <h3>
                <Link to="/account">
                  HOME
                </Link>
              </h3>
              {props.oidcUser || !props.isEnabled ? (
                <ul>
                  <li>
                    <Link to="/account/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/admin">
                      Admin
                    </Link>
                  </li>
                  <button type="button" onClick={handleLogout(props.logout)}>
                    logout
                  </button>
                </ul>
              ) : (
                <button type="button" onClick={props.login}>
                    login
                </button>
                )}
            </div>
          );
        }}
      </AuthenticationConsumer>
    </header>
  )
});