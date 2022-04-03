import * as React from "react";
import { SidebarData } from "../../components/SidebarData";
import { StaticSidebarData } from "../../components/StaticSidebarData";
import { useState } from "react";
import * as Icons from "react-icons/fa";
import {
  Link,
} from "react-router-dom";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navbar">
      <div className="primary-red-text absolute top-0 left-0 lg:w-3pr my-h08pr lg:static lg:my-0 lg:mt-w4025pr ml-w05pr">
        <Icons.FaBars onClick={showSidebar} size={25}/>
      </div>
      <nav className="top-h6pr h-94pr lg:h-88pr hidden lg:flex lg:top-h12pr lg:w-4pr nav-menu inactive">
        <ul className="lg:mt-h2pr nav-menu-items">
          {StaticSidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName + " mb-.5pr"}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={sidebar ? "nav-menu active top-h6pr h-screen lg:top-h12pr w-105pr lg:w-11pr" : "nav-menu top-h6pr h-screen lg:top-h12pr w-screen lg:w-11pr"}>
        <ul className="nav-menu-items ml-h2pr lg:ml-h4pr" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
