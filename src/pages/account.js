import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import Routes from '../routes/routes';
import store from '../routes/store';
import userManager from '../utils/userManager';
import Root from '../components/root';


const Account = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <Root>
        <Routes />
      </Root>
    </OidcProvider>
  </Provider>

);

export default Account;
