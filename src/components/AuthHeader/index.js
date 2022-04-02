import React from 'react'
import Header_Logo from '../../assets/svgs/open_doors_logo.svg'

const AuthHeader = () => {
  return (
    <nav
      className={
        "h-6pr bg-white fixed top-0 left-0 w-screen justify-center flex shadow-lg" +
        " lg:h-12pr lg:justify-between lg:shadow-none"
      }
    >
      <section className={"h-4pr my-h08pr" + " lg:flex lg:h-10pr lg:p-1"}>
        <a href="/">
          <img
            className={"h-4pr" + " lg:h-10pr lg:ml-w05pr"}
            src={Header_Logo}
            alt="Open Doors Sanctuary"
          />
        </a>
      </section>
    </nav>
  );
}

export default AuthHeader;
