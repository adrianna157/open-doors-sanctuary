import React from "react";
import { Authenticator } from "aws-amplify-react";
import Login from "./pages/Login";
import SignedIn from "./pages/SignedIn";
import CreateAccount from "./pages/CreateAccount";
import ConfirmAccount from "./pages/ConfirmAccount";
import AuthStore from "./helpers/AuthContext/AuthContext.js";
import AlertStore from "./helpers/AlertContext/AlertContext.js";
import ForgotPassword from "./pages/ForgotPassword";

const AuthStateApp = (props) => {
  return (
    <AuthStore>
      <AlertStore>
        <Authenticator hideDefault={true}>
          <SignedIn override={"SignedIn"} />
          <Login override={"SignIn"} />
          <CreateAccount override={"SignUp"} />
          <ConfirmAccount override={"ConfirmSignUp"} />
          <ForgotPassword override={"ForgotPassword"} />
        </Authenticator>
      </AlertStore>
    </AuthStore>
  );
};

export default AuthStateApp;
