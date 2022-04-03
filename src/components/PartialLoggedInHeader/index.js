import React, { useState, useContext, useEffect } from "react";
import Header_Logo from '../../assets/open_doors_logo.svg'
import Profile from '../../assets/Images/Profile.svg'
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';
import { Link } from "react-router-dom";


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
    <header className="fixed top-0 left-0 right-0">
      <nav className="container relative mx-auto pt-2 flex items-center"
      >
        <Link
          to="/"
          className="overflow-hidden w-36 h-36 rounded-full flex items-center justify-center"
        >
          <img 
            className="w-50 h-50 max-w-none translate-y-4"
            alt="Open Doors Sanctuary"
            src={Header_Logo}
          />
        </Link>
        <div className="flex content-start flex-wrap lg:h-10pr lg:py-3 absolute top-0 right-0 lg:my-h08pr">
          <p className="header-text-font text-sm lg:text-3xl my-auto greyed-text mt-h101pr">{username}</p>
          <div className="lg:my-h08pr">
            <img className="h-4pr mx-2pr my-1pr" src={Profile} alt="Profile Icon" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default PartialLoggedInHeader;