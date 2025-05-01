import React from "react";
import "./header.css";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">

			
          <NavLink to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </NavLink>


          <div className="nav-texts">
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }>Menu</NavLink>
            
              
            
            <NavLink
              to="/form"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              } >Employees</NavLink>
           
            
              
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
