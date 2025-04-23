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
          <div className="nav-column">
            <nav className="nav-links">
              <div className="nav-item food">Food</div>
              <div className="nav-item wines">Wines</div>
              <div className="nav-item book-table">Book table</div>
            </nav>
          </div>
          <div className="workers-column">
            <div className="for-workers">Employees</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
