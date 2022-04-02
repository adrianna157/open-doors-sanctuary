import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
// import PrivateRoute from '../PrivateRoute'
// import Dashboard from '../../pages/Dashboard'
// import Investigation from '../../pages/Investigation';
// import About from "../../pages/About";
// import RequiredTraining from "../../pages/RequiredTraining";
// import CertificateUpload from "../../pages/CertificateUpload"
// import CasePhotoUpload from "../../pages/CasePhotoUpload";
// import Welcome from "../../pages/Welcome";
// import ThankYou from "../../pages/ThankYou";
// import Rules from "../../pages/Rules";
// import Faq from "../../pages/Faq";
// import ActiveCases from "../../pages/ActiveCases";
// import Privacy from "../../pages/Privacy";
// import TermsOfUse from '../../pages/TermsOfUse';
// import Settings from "../../pages/Settings";

const PageRoute = (props) => {
  let { attributes } = props.authData
  const histoy = useNavigate()

  useEffect(() => {
    if (!attributes) {
      histoy.go(0)
    }
  }, [attributes])

  return (
    <div>
      <Routes>
        {/* <PrivateRoute userAttributes={attributes} path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute
          userAttributes={attributes}
          path="/investigation/:idParam"
        >
          <Investigation />
        </PrivateRoute>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/required_training">
          <RequiredTraining />
        </Route>
        <PrivateRoute userAttributes={attributes} exact path="/">
          <Dashboard userAttributes={attributes} />
        </PrivateRoute>
        <Route path="/certificate_upload">
          <CertificateUpload />
        </Route>
        <PrivateRoute userAttributes={attributes} path="/case_photo_upload">
          <CasePhotoUpload />
        </PrivateRoute>
        <Route path="/thank_you">
          <ThankYou />
        </Route>
        <PrivateRoute userAttributes={attributes} path="/welcome">
          <Welcome />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/rules">
          <Rules />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/faq">
          <Faq />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/active_cases">
          <ActiveCases userAttributes={attributes} />
        </PrivateRoute>
        <PrivateRoute userAttributes={attributes} path="/privacy">
          <Privacy />
        </PrivateRoute>
        <Route path="/terms_of_use">
          <TermsOfUse />
        </Route>
        <PrivateRoute userAttributes={attributes} path="/settings">
          <Settings />
        </PrivateRoute> */}
      </Routes>
    </div>
  );
}

export default PageRoute
