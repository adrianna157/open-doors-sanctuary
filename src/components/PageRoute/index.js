import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import PrivateRoute from '../../components/PrivateRoute'
import Layout from "./pages/Layout";
import TitleScreen from "./pages/TitleScreen";
import About from "./pages/About";
import LoginHost from "./pages/LoginHost";
import LoginRefugee from "./pages/LoginRefugee";
import Dashboard from "./pages/Dashboard";
import GuestList from "./pages/GuestList";
import NotFound from "./pages/NotFound";
import CreateGuestAccount from "./pages/CreateGuestAccount";
import BecomeHost from "./pages/BecomeHost";

// TODO: Need to create these pages
// import TermsOfUse from "./pages/TermsOfUse";
// import Privacy from "./pages/Privacy";


const PageRoute = (props) => {
  let { attributes } = props.authData
  const history = useNavigate()

  useEffect(() => {
    if (!attributes) {
      history.go(0)
    }
  }, [attributes, history])

  return (
    <div>
      <Routes>
        {/* TODO: When Auth is Implemented Use Private Routes Implementation */}
        {/* <PrivateRoute userAttributes={attributes} path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/layout">
          <Layout />
        </Route>
        <PrivateRoute userAttributes={attributes} exact path="/">
          <Dashboard userAttributes={attributes} />
        </PrivateRoute>
        <Route path="/title_screen">
          <TitleScreen />
        </Route>
        <PrivateRoute userAttributes={attributes} path="/host_login">
          <LoginHost />
        </PrivateRoute>
        <Route path="/refugee_login">
          <LoginRefugee />
        </Route>
        <PrivateRoute userAttributes={attributes} path="/guest_list">
          <GuestList />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/not_found">
          <NotFound />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/create_guest">
          <CreateGuestAccount />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/become_host">
          <BecomeHost />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/privacy">
          <Privacy />
        </PrivateRoute>
        <Route path="/terms_of_use">
          <TermsOfUse />
        </Route> */}

        {/*Andrii's Routes without Auth Implementation: Use For Development Purposes Until Auth Implementation */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="login-host" element={<LoginHost />} />
          <Route path="login-guest" element={<LoginRefugee />} />
          <Route path="create-guest-account" element={<CreateGuestAccount />} />
          <Route path="become-host" element={<BecomeHost />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="guest-list" element={<GuestList />} />
          <Route path="" element={<TitleScreen />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default PageRoute
