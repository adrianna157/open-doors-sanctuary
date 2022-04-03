import React, { useState, useContext, useEffect } from "react";
import Header_Logo from '../../assets/Images/guardian_group_logo.svg'
import Profile from '../../assets/Images/Profile.svg'
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';

const PartialLoggedInHeader = (props) => {
  const [username, setUsername] = useState("loading...")
  const [state, dispatch] = useContext(AuthContext)

  useEffect(() => {
    if (state.user) {
      if (Object.keys(state.user).length > 0) {
        const capitalizedFirstName = state.user.attributes.given_name.charAt(0).toUpperCase() + state.user.attributes.given_name.slice(1)
        const capitalizedLastName = state.user.attributes.family_name.charAt(0).toUpperCase() + state.user.attributes.family_name.slice(1)
        setUsername(capitalizedFirstName + " " + capitalizedLastName)
      }
    }
  }, [])

  return (
    <nav className={
      "h-6pr bg-white fixed top-0 left-0 w-screen flex shadow-lg justify-center" +
      " lg:h-12pr lg:justify-start lg:shadow-none"
    }>
      <center><img className={
        "h-4pr my-h08pr" +
        " lg:h-10pr lg:ml-w05pr"
        }
        src={Header_Logo} alt="Open Doors Sanctuary"
      /></center>
      <div className="flex content-start flex-wrap lg:h-10pr lg:py-3 absolute top-0 right-0 lg:my-h08pr">
        <p className="header-text-font text-sm lg:text-3xl my-auto greyed-text mt-h101pr">{username}</p>
        <div className="lg:my-h08pr">
          <img className="h-4pr mx-2pr my-1pr" src={Profile} alt="Profile Icon" />
        </div>
      </div>
    </nav>
  )
}

export default PartialLoggedInHeader;