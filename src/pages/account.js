import React from "react"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../providers/authProvider";
import Routes from "../routes/routes";


const Account = () => (
  <AuthProvider>
    <BrowserRouter children={Routes} basename="/account" />
  </AuthProvider>
)

export default Account
