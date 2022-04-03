import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../auth/AuthProvider";
import Confirm from "../../components/Confirm";
import logo from "../../assets/open_doors_logo.svg";
import HeaderText from "../../components/HeaderText";

function Header() {
  const auth = useContext(AuthContext);
  const [showDialog, setDialogVisibility] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto p-5 flex text-white">
        <Link
          to="/"
          className="w-16 h-16 rounded-full flex items-center justify-center"
        >
          <img
            alt=""
            src={logo}
            className="w-36 h-36 translate-y-2 max-w-none"
          />
        </Link>
        <HeaderText noBold fontSize="italic text-2xl" className="pb-2pr">
          Open Doors Sanctuary
        </HeaderText>

        <nav className="ml-auto flex justify-end self-center items-center gap-x-8">
          <button>Language</button>
          {!auth.isAuthorized && (
            <>
              <a href="/">Become a host</a>
              <Link to="/login">LogIn</Link>
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
