import React from "react";
import "../CSS/navbar.css";
import NavBtn from "./components/NavBtn";

const NavBar = () => {
  return (
    <div className="py-7 flex justify-evenly bg-gray-400 w-screen m-1">
      <NavBtn title="Home" link="/" sami="dude"/>
      <NavBtn title="About Me" link="about"/>
      <NavBtn title="My Projects" link="myprojects"/>
      <NavBtn title="Contact" link="contacts"/>
    </div>
  );
};

export default NavBar;
