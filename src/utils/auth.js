import { createUserManager } from 'redux-oidc';

export const isBrowser = typeof window !== "undefined";

const tokens = {
  idToken: false,
  accessToken: false,
}

let user = {};

const settings = {
  authority: 'http://localhost:5000/',
  client_id: 'default',
  redirect_uri: 'http://localhost:8000/signin-oidc',
  post_logout_redirect_uri: 'http://localhost:8000',
  response_type: "id_token",
  scope: "openid profile email",
  loadUserInfo: true
};


export const isAuthenticated = () => {
  return tokens.idToken !== false
}



export const login = () => {
  if (!isBrowser) {
    return
  }

  user = createUserManager(settings)
}

export const logout = () => {
  tokens.accessToken = false
  tokens.idToken = false
  user = {}
  localStorage.setItem("isLoggedIn", false)

  auth.logout({
    returnTo: location.href,
  })
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    if (err.error === "login_required") {
      login();
    }
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile

      localStorage.setItem("isLoggedIn", true)

      cb()
    })
  }
}

export const checkSession = callback => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  console.log({ isLoggedIn })
  if (isLoggedIn === "false") {
    console.log("Not logged in")
    callback()
    return
  }
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}