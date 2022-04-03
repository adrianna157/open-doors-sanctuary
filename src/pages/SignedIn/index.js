import React, { Fragment } from "react"
import { HashRouter as Router } from 'react-router-dom';
import PageLayout from "../../components/PageLayout";
import Alerthandler from "../../components/AlertHandler";

const SignedIn = (props) => {
  return props.authState === "signedIn" && props.authData ? (
    <Router>
     <Alerthandler /> 
      <PageLayout authData={props.authData} />
    </Router>
  ) : (
    <Fragment></Fragment>
  );
}

export default SignedIn;
