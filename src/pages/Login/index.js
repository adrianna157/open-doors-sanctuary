import React, { useState, useContext } from "react";
import HeaderText from "../../components/HeaderText";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Container from "../../components/Container";
import Page from "../../components/Page";
import AuthContext from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import AlertHandler from "../../components/AlertHandler";
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";

const Login = (props) => {
  const navigator = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useContext(AuthContext);
  const [alert, setAlert] = useContext(NotificationContext);

  const signIn = () => {
    const tempEmail = email;
    setEmail("");
    const tempPassword = password;
    setPassword("");
    if (!tempEmail.includes("@")) {
      setAlert({
        type: "SET_NOTIFICATION",
        payload: {
          occurs: true,
          message: "Invalid Email!",
          textColor: "redText",
          borderColor: "redBorder",
        },
      });
      return;
    }
    if (tempPassword.length < 8) {
      setAlert({
        type: "SET_NOTIFICATION",
        payload: {
          occurs: true,
          message: "Invalid Password!",
          textColor: "redText",
          borderColor: "redBorder",
        },
      });
      return;
    }
    state.setAuthentification(true);
    if (tempEmail.split("@")[0].toLowerCase().includes("host")) {
      state.setUserType("host");
      navigator("/dashboard");
    } else {
      state.setUserType("guest");
      navigator("/list");
    }
  };

  return (
    <Page dontShowOverflow noLeftMargin>
      <AlertHandler />
      <Container
        height="md:h-[32rem] sm:h-1/6 lg:h-63pr"
        width="md:w-[32rem] sm:w-1/6 lg:w-1/3"
        padding="pt-3pr px-4pr sm:pl-2"
        className="flex flex-col"
        margin=" ml-16"
        mariginTop="mt-40 lg:mt-h26pr"
      >
        <div className="text-center">
          <HeaderText noBold fontSize="text-4xl" className="pb-2pr">
            Log In
          </HeaderText>
        </div>
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
              onClick={() => navigator("/sign-up")}
            >
              Create Account
            </Button>
            <Button
              anchorTag
              onClick={() => navigator("/restore-password")}
            >
              Forgot Password
            </Button>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Login;
