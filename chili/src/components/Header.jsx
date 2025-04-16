import React from 'react';
import './header.css';
import Logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <img className="logo" src={Logo} alt="Logo" />
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#food">Food</a>
                        </li>
                        <li>
                            <a href="#wines">Wines</a>
                        </li>
                        <li>
                            <a href="#bat">Book a Table</a>
                        </li>
                        <li>
                            <a href="#for-workers" className="FWorkers">For Workers</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;