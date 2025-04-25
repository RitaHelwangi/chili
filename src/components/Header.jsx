<<<<<<< HEAD
// src/components/Header.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav" style={{ margin: '0 auto' }}>
        <Link to="#">Food</Link>
        <Link to="#">Wines</Link>
        <Link to="#">Book Table</Link>
      </nav>
      <nav className="nav">
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  )
}
=======
import React from "react";
import "./header.css";
import Logo from "../assets/Logo.png";
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
>>>>>>> dev
