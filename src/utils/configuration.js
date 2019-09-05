export const configuration = {
  client_id: 'implicit',
  redirect_uri: 'http://localhost:8000/account/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:8000/account',
  scope: 'openid profile',
  authority: 'http://localhost:5000',
  silent_redirect_uri: 'http://localhost:8000/account/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};


export const configuration2 = {
  client_id: 'implicit',
  redirect_uri: 'http://localhost:8000/account/authentication/callback',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:8000/account',
  scope: 'openid profile email',
  authority: 'https://demo.identityserver.io',
  silent_redirect_uri: 'http://localhost:8000/account/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};