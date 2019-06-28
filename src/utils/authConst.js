export const IDENTITY_CONFIG = {
  authority: process.env.GATSBY_AUTH_URL,
  client_id: process.env.GATSBY_IDENTITY_CLIENT_ID,
  redirect_uri: process.env.GATSBY_REDIRECT_URL,
  silent_redirect_uri: process.env.GATSBY_SILENT_REDIRECT_URL,
  post_logout_redirect_uri: process.env.GATSBY_LOGOFF_REDIRECT_URL,
  audience: "your audience",
  response_type: "token",
  automaticSilentRenew: false,
  loadUserInfo: false,
  scope: "openid profile email"
};


export const settings = {
  authority: "http://localhost:5000",
  client_id: "default",
  redirect_uri: "http://localhost:8000/account/private",
  silent_redirect_uri: "http://localhost:8000/silent-renew",
  post_logout_redirect_uri: "http://localhost:8000/account",
  response_type: 'id_token',
  scope: 'openid profile'
};

export const METADATA_OIDC = {
  issuer: "http://identityserver",
  jwks_uri:
    process.env.GATSBY_AUTH_URL + "/.well-known/openid-configuration/jwks",
  authorization_endpoint: process.env.GATSBY_AUTH_URL + "/connect/authorize",
  token_endpoint: process.env.GATSBY_AUTH_URL + "/connect/token",
  userinfo_endpoint: process.env.GATSBY_AUTH_URL + "/connect/userinfo",
  end_session_endpoint: process.env.GATSBY_AUTH_URL + "/connect/endsession",
  check_session_iframe:
    process.env.GATSBY_AUTH_URL + "/connect/checksession",
  revocation_endpoint: process.env.GATSBY_AUTH_URL + "/connect/revocation",
  introspection_endpoint: process.env.GATSBY_AUTH_URL + "/connect/introspect"
};
