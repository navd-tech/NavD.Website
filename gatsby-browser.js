import React from "react"
import { AuthenticationProvider, oidcLog } from "@axa-fr/react-oidc-context";
import { BrowserRouter as Router } from "react-router-dom";
import { configuration2, configuration } from "./src/utils/configuration"


export const wrapRootElement = ({ element }) => {
  return (
    <Router>
      <AuthenticationProvider
        configuration={configuration}
        loggerLevel={oidcLog.DEBUG}
      >{element}
      </AuthenticationProvider>
    </Router>
    )}