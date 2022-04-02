import React from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
// import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "My  Cases",
    path: "/",
    icon: <BsIcons.BsBriefcase size={20} />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings size={20} />,
    cName: "nav-text",
  },
  // {
  //   title: "Help",
  //   path: "/faq",
  //   icon: <BiIcons.BiHelpCircle size={20} />,
  //   cName: "nav-text",
  // },
  {
    title: "New  Case",
    path: "/investigation/new",
    icon: <CgIcons.CgAdd size={20} />,
    cName: "nav-text",
  },
];
