import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  authority: 'http://localhost:5000/',
  client_id: 'mvc2',
  redirect_uri: 'http://localhost:8000/account/callback',
  post_logout_redirect_uri: 'http://localhost:8000/signout-callback-oidc',
  response_type: "id_token",
  scope: "openid profile"
};

const userManager = createUserManager(userManagerConfig);

export default userManager;