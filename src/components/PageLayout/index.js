import React, { Fragment, useEffect, useContext } from "react"
import LoggedInHeader from "../LoggedInHeader";
import PartialLoggedInHeader from "../PartialLoggedInHeader";
import AuthHeader from "../AuthHeader";
import PageRoute from '../PageRoute';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';

const PageLayout = (props) => {
  const location = useLocation();
  const { pathname } = location
  let { username } = props.authData

  const [state, dispatch] = useContext(AuthContext)

  useEffect(() => {
    if (!state.user) {
      dispatch({type: 'SET_USER', payload: props.authData})
    }
  }, [dispatch, props.authData])

  if (!username) {
    username = ""
  }

  if (
    pathname === "/required_training" || 
    pathname === "/thank_you" ||
    pathname === "/file_upload" || 
    pathname === "/about"
  ) {
    return (
      <Fragment>
        <AuthHeader/>
        <PageRoute authData={props.authData} />
      </Fragment>
    )
  } else if ( pathname === "/welcome" || pathname === "/rules" || pathname === "/certificate_upload") {
    return (
      <Fragment>
        <PartialLoggedInHeader username={username} />
        <PageRoute authData={props.authData} />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <LoggedInHeader />
        <PageRoute authData={props.authData} />
        <Footer />
      </Fragment>
    )
  }
}

export default PageLayout;
