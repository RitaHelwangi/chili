import React from "react";
import "./header.css";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-column">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
