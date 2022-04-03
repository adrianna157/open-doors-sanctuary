import React, { useState, Fragment, useContext } from "react";
import { Auth } from "aws-amplify";
import HeaderText from "../../components/HeaderText";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Container from "../../components/Container";
import Page from "../../components/Page";
import AuthHeader from "../../components/AuthHeader";
import { AuthContext } from "../../helpers/AuthContext/AuthContext.js";
import AlertHandler from "../../components/AlertHandler";
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useContext(AuthContext);
  const [alert, setAlert] = useContext(NotificationContext);

  const signIn = () => {
    Auth.signIn({
      username: email.toLowerCase(),
      password,
    })
      .then((user) => {
        dispatch({ type: "SET_USER", payload: user });
        props.onStateChange("signedIn", {});
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        setAlert({
          type: "SET_NOTIFICATION",
          payload: {
            occurs: true,
            message: err.message,
            textColor: "redText",
            borderColor: "redBorder",
          },
        });
      });
  };

  return props.authState === "signIn" ? (
    <Page dontShowOverflow noLeftMargin>
      <AlertHandler />
      <AuthHeader />
      <Container
        grayedBackground
        height="md:h-[32rem] sm:h-1/6 lg:h-63pr"
        width="md:w-[32rem] sm:w-1/6 lg:w-1/3"
        padding="pt-3pr px-4pr sm:pl-2"
        className="flex flex-col"
        margin=" ml-16"
        mariginTop="mt-24 lg:mt-h26pr"
      >
        <center>
          <HeaderText noBold fontSize="text-4xl" className="pb-2pr">
            Log In
          </HeaderText>
        </center>
        <div className="flex flex-col">
          <TextField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeHolder="Email"
            label="Email"
            className="mb-4 "
          />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeHolder="Password"
            label="Password"
            className="mb-4pr"
          />
          <Button solidGreen padding="py-h1pr" onClick={signIn}>
            Submit
          </Button>
          <div className="flex justify-between mt-4">
            <Button
              anchorTag
              onClick={() => {
                props.onStateChange("signUp", {});
              }}
            >
              Create Account
            </Button>
            <Button
              anchorTag
              onClick={() => {
                props.onStateChange("ForgotPassword");
              }}
            >
              Forgot Password
            </Button>
          </div>
        </div>
      </Container>
    </Page>
  ) : (
    <Fragment></Fragment>
  );
};

export default Login;
