import React from "react";
import { Authenticator } from "aws-amplify-react";
import "./App.css";
// TODO : When Authh is Implemented, Use these pages
import Login from "./pages/Login";
import AuthStore from "./helpers/AuthContext/AuthContext.js";
import AlertStore from "./helpers/AlertContext/AlertContext.js";
import TitleScreen from "./pages/TitleScreen/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import GuestList from "./pages/GuestList";
import CreateAccount from "./pages/CreateAccount";
import GuestDashboard from "./pages/GuestDashboard";
import ForgotPassword from "./pages/ForgotPassword";




const AuthStateApp = (props) => {
  return (
    <AuthStore>
      <AlertStore>
        <Authenticator hideDefault={true}>
          {/* <SignedIn override={"SignedIn"} />
          <Login override={"SignIn"} />
          <CreateAccount override={"SignUp"} />
          <ConfirmAccount override={"ConfirmSignUp"} />
          <ForgotPassword override={"ForgotPassword"} /> */}
          {/* <BrowserRouter>
            <LoggedInHeader />
            <TitleScreen/>
          </BrowserRouter> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="sign-up"
                  element={<CreateAccount authState="signUp" />}
                />
                <Route
                  path="restore-password"
                  element={<ForgotPassword authState="ForgotPassword"/>}
                />
                {/* <Route path="login-guest" element={<LoginRefugee />} /> */}
                {/* <Route path="create-guest-account" element={<CreateGuestAccount />} /> */}
                {/* <Route path="become-host" element={<BecomeHost />} /> */}
                <Route path="guest-dashboard" element={<GuestDashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="guest-list" element={<GuestList />} />
                <Route path="" element={<TitleScreen />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Authenticator>
      </AlertStore>
    </AuthStore>

    // Andrii's Code
  );
};

export default AuthStateApp;
