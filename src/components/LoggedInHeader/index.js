import React, { useState, useContext, useEffect, useRef } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button"
import Header_Logo from '../../assets/Images/guardian_group_logo.svg'
import Profile from '../../assets/Images/Profile.svg'
import { AuthContext } from '../../helpers/AuthContext/AuthContext.js';
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const LoggedInHeader = (props) => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false)
  const [state, dispatch] = useContext(AuthContext)
  const [username, setUsername] = useState("loading...")
  const clickOutsideRef = useRef(null);
  const history = useNavigate();

  const deactivevateDropDoneOnOutsideClick = (event) => {
    if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target)) {
      setDropdownIsActive(false)
    }
  }

  useEffect(() => {
    if (state.user) {
      if (Object.keys(state.user).length > 0) {
        const capitalizedFirstName = state.user.attributes.given_name.charAt(0).toUpperCase() + state.user.attributes.given_name.slice(1)
        const capitalizedLastName = state.user.attributes.family_name.charAt(0).toUpperCase() + state.user.attributes.family_name.slice(1)
        setUsername(capitalizedFirstName + " " + capitalizedLastName)
      }
    }

    document.addEventListener("mousedown", deactivevateDropDoneOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", deactivevateDropDoneOnOutsideClick);
    };
  }, [state, clickOutsideRef])

  function toggleDropdown() {
    switch (dropdownIsActive) {
      case false:
        setDropdownIsActive(true)
        break
      case true:
        setDropdownIsActive(false)
        break
      default:
        setDropdownIsActive(false)
    }
  }

  function renderDropdown() {
    if (dropdownIsActive) {
      return (
        <div ref={clickOutsideRef} className="absolute right-0 rounded-md shadow-lg lg:overflow-visible">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">
              <Button solidBlue className="block px-4 py-2 text-sm leading-5" onClick={() => {
                 Auth.signOut();
                 history.push("/");
                 history.go(0);
              } }> Sign Out </Button>
            </div>
          </div>
        </div>
      )
    }
  }

    return (
      <nav
        className={
          "h-6pr bg-white fixed top-0 left-0 w-screen justify-between flex shadow-lg lg:h-12pr lg:justify-start lg:shadow-none"
        }
      >
        <NavBar />
        <Link to="/">
          <center>
            <img className={
              "h-4pr my-h08pr absolute lg:static" +
              " lg:h-10pr lg:ml-w05pr"
              }
              src={Header_Logo} alt="Open Doors Sanctuary"
            />
          </center>
        </Link>
        <div className="flex content-start flex-wrap lg:h-10pr lg:py-3 lg:absolute lg:top-0 lg:right-0 lg:my-h08pr">
          <p className="header-text-font text-sm lg:text-3xl my-auto greyed-text mt-h101pr">
            {username}
          </p>
          <div className="lg:my-h08pr">
            <button onClick={toggleDropdown}>
              <img
                className="h-4pr mx-2pr my-1pr"
                src={Profile}
                alt="Profile Icon"
              />
            </button>
            {renderDropdown()}
          </div>
        </div>
      </nav>
    );
}

export default LoggedInHeader;
