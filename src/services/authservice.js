import { UserManager, WebStorageStateStore, Log } from "oidc-client";
import { IDENTITY_CONFIG, settings, METADATA_OIDC } from "../utils/authConst";


export default class AuthService {
  userManager;
  accessToken;

  constructor() {
    this.userManager = new UserManager({
      ...settings,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      metadata: {
        ...METADATA_OIDC
      }
    });
    // Logger
    Log.logger = console;
    Log.level = Log.DEBUG;

    this.userManager.events.addUserLoaded(user => {
      this.accessToken = user.access_token;
      localStorage.setItem("access_token", user.access_token);
      localStorage.setItem("id_token", user.id_token);
      this.setUserInfo({
        accessToken: this.accessToken,
        idToken: user.id_token
      });
      if (window.location.href.indexOf("signin-oidc") !== -1) {
        this.navigateToScreen();
      }
    });
    this.userManager.events.addSilentRenewError(e => {
      console.log("silent renew error", e.message);
    });

    this.userManager.events.addAccessTokenExpired(() => {
      console.log("token expired");
      this.signinSilent();
    });
  }

  signinRedirectCallback = () => {
    this.userManager.signinRedirectCallback().then((user) => {
      if (user.state.url) {
        window.location.replace(user.state.url);
      }
    });
  };

  getUser = async () => {
    const user = await this.userManager.getUser();
    if (!user) {
      return await this.userManager.signinRedirectCallback();
    }
    return user;
  };

  parseJwt = token => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  setUserInfo = authResult => {
    const data = this.parseJwt(this.accessToken);

    this.setSessionInfo(authResult);
    this.setUser(data);
  };

  signinRedirect = () => {
    localStorage.setItem("redirectUri", window.location.pathname);
    this.userManager.signinRedirect({});
  };

  setUser = data => {
    localStorage.setItem("userId", data.sub);
  };

  navigateToScreen = () => {
    const redirectUri = !!localStorage.getItem("redirectUri")
      ? localStorage.getItem("redirectUri")
      : "/en/dashboard";
    const language = "/" + redirectUri.split("/")[1];

    window.location.replace(language + "/dashboard");
  };

  setSessionInfo(authResult) {
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
  }

  isAuthenticated = () => {
    const access_token = localStorage.getItem("access_token");
    return !!access_token;
  };

  signinSilent = () => {
    this.userManager.signinSilent()
      .then(user => {
        console.log("signed in", user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  signinSilentCallback = () => {
    this.userManager.signinSilentCallback();
  };

  createSigninRequest = () => {
    return this.userManager.createSigninRequest();
  };

  logout = () => {
    this.userManager.signoutRedirect({
      id_token_hint: localStorage.getItem("id_token")
    });
    this.userManager.clearStaleState();
  };

  signoutRedirectCallback = () => {
    this.userManager.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location.replace(process.env.GATSBY_PUBLIC_URL);
    });
    this.userManager.clearStaleState();
  };
}
