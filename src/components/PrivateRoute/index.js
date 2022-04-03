import React, { useState, useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';

const PrivateRoute = (props) => {
  const { path, children, userAttributes } = props
  const [state, dispatch] = useContext(AuthContext)
  const [userStatusLoaded, setUserStatusLoaded] = useState(false)
  const [userStatus, setUserStatus] = useState(null)

  useEffect(() => {
    if (!userStatusLoaded) {
      if (state.user) {
        setUserStatus(state.user.attributes['custom:status'])
        setUserStatusLoaded(true)
      }
    }
  }, [state])

  return (
    <Route
      path={path}
      render={() => {
        if (userStatus) {
          if (userStatus === "active") {
            return children
           } else {
            return (<Redirect
              to="/required_training"
            />)
           }
        }
      }}
    />
  )
}

export default PrivateRoute
