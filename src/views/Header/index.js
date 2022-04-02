import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import AuthContext from "../../auth/AuthProvider";
import Confirm from "../../components/Confirm";
import logo from "../../assets/open_doors_logo.svg";

function Header() {
  const auth = useContext(AuthContext);
  const [showDialog, setDialogVisibility] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto p-5 flex">
        <Link to="/" className="w-16 h-16 rounded-full border-2 border-gray-500 flex items-center justify-center">
	        <img alt="" src={logo} className="w-36 h-36 translate-y-2 max-w-none" />
        </Link>

        <nav className="ml-auto flex justify-end self-center items-center gap-x-8">
          <button>Language</button>
          {!auth.isAuthorized && (
            <>
              <a href="/">Become a host</a>
              <Dropdown
                title="Log In"
                components={[
                  () => (
                    <Link to="/login-guest" className="ease-in duration-150 hover:bg-violet-600 p-2 rounded-lg w-full">
                      Log In Guest
                    </Link>
                  ),
                  () => (
                    <Link to="/login-host" className="ease-in duration-150 hover:bg-violet-600 p-2 rounded-lg w-full">
                      Log In Host
                    </Link>
                  ),
                ]}
              />
            </>
          )}
          {auth.isAuthorized ? (
            <button onClick={() => setDialogVisibility(true)}>Logout</button>
          ) : null}
        </nav>
      </div>
      <Confirm
        closeModal={() => setDialogVisibility(false)}
        showModal={showDialog}
        onOkey={() => {
          auth.setAuthentification(false);
          setDialogVisibility(false);
        }}
        onCancel={() => setDialogVisibility(false)}
      >
        Logout from system
      </Confirm>
    </header>
  );
}

export default Header;
