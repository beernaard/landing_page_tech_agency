import React, { useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActiv] = useState(false);
  const toggleNavBar = () => {
    setToggle((prevstate) => !prevstate);
    setActiv((prevstate) => !prevstate);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">
          <p>Digital Agency</p>
        </a>
      </div>
      <div className="toggle-navbar" onClick={() => toggleNavBar()}>
        {toggle ? <RxHamburgerMenu /> : <RxCross1 />}
      </div>
      <div className={active ? "navbar-links" : "navbar-links inactive"}>
        <div className="toggle-navbar" onClick={() => toggleNavBar()}>
          <RxCross1 />
        </div>
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#aboutus">
          <p>About Us</p>
        </a>
        <a href="#services">
          <p>Services</p>
        </a>
        <a href="#contactus">
          <p>Contact Us</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
