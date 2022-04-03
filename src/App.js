import React from "react";
import "./App.css";
// TODO : When Authh is Implemented, Use these pages
import Login from "./pages/Login";
import { AuthProvider } from "./auth/AuthProvider";
import AuthStore from "./helpers/AuthContext/AuthContext.js";
import AlertStore from "./helpers/AlertContext/AlertContext.js";
import TitleScreen from "./pages/TitleScreen/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import GuestList from "./pages/GuestList";
// import BecomeHost from "./pages/BecomeHost";
import CreateAccount from "./pages/CreateAccount";
import GuestDashboard from "./pages/GuestDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import RequiredVerification from "./pages/RequiredVerification";

const AuthStateApp = (props) => {
  return (
    <AuthStore>
      <AuthProvider>
        <AlertStore>
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
                  element={<ForgotPassword authState="ForgotPassword" />}
                />
                {/* <Route path="sign-up" element={<BecomeHost />} /> */}
                <Route path="required-verification" element={<RequiredVerification />} />
                <Route path="guest-dashboard" element={<GuestDashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="guest-list" element={<GuestList />} />
                <Route path="" element={<TitleScreen />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AlertStore>
      </AuthProvider>
    </AuthStore>
  );
};

export default AuthStateApp;
