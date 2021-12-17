import React, { Component } from "react";
import logo from "../images/logo.png";
const NavBar = () => {
  /*
        @@@ handleClick by using react router dom 
    */
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img src={logo} alt="Logo images" />
      </div>
      <div className="navbar_elements">
        <div>
          <ul>
            <li key={"1"}>Model S</li>
            <li key={"2"}>Model 3</li>
            <li key={"3"}>Model X</li>
            <li key={"4"}>Model Y</li>
            <li key={"5"}>Powerwall</li>
            <li key={"6"}>Recharge</li>
          </ul>
        </div>
        <div>
          <ul>
            <li key={"7"}>Assistance</li>
            <li key={"8"}>Shop</li>
            <li key={"9"}>Compte</li>
            <li key={"10"}>Menu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
