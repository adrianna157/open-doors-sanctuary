import React from "react";
import "./App.css";
// TODO : When Authh is Implemented, Use these pages
import Login from "./pages/Login";
// import SignedIn from "./pages/SignedIn";
// import CreateAccount from "./pages/CreateAccount";
// import ConfirmAccount from "./pages/ConfirmAccount";
// import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./auth/AuthProvider";
import AlertStore from "./helpers/AlertContext/AlertContext.js";
import TitleScreen from "./pages/TitleScreen/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import GuestList from "./pages/GuestList";
import BecomeHost from "./pages/BecomeHost";

const AuthStateApp = (props) => {
  return (
    <AuthProvider>
      <AlertStore>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                {/* <Route path="login-guest" element={<LoginRefugee />} /> */}
                {/* <Route path="create-guest-account" element={<CreateGuestAccount />} /> */}
                <Route path="sign-up" element={<BecomeHost />} />
                <Route path="dashboard" element={<Dashboard />}/>
                <Route path="list" element={<GuestList />} />
                <Route path="" element={<TitleScreen />} />
              </Route>
              <Route path="*" element={<NotFound /> } />
            </Routes>
          </BrowserRouter>
      </AlertStore>
    </AuthProvider>
  );
};

export default AuthStateApp;
