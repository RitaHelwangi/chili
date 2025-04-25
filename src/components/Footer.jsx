import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="Contact">
            <h2>Find Your Way To Chilis!</h2>
            <p>You can contact us by: <br />
                Phone: 031 123 456 <br />
                Email: chillis@pizza.com</p>
            </div>
            <div className="address-info">
                <p>Adress at:<br />
                    Pizzeriagatan 18 445 74<br />
                    Gothenburg, Sweden</p>
            </div>
            <div className="OpeningHours">
                <h2>Our opening hours:</h2>
                <p>Mon–Fri: 11:00 AM – 7:00 PM <br />
                Sat: 1:00 PM – 11:00 PM <br />
                Sun: Closed</p>

            </div>
        </div>
        </footer>
    );
    }

export default Footer;