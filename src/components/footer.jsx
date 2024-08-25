import { FaSearch } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import '../styles/main/main.css';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer >
            <div className="footer_container">
                <div className="footer_logo">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div class="divider"></div>
                    <div className="footer_title">E-learning <br /> Platform</div>
                </div>
                <div className="footer_subscribe">
                    <p>Subscribe to get our Newsletter</p>
                    <form className="footer_form">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="theButton signup"
                        />
                        <button type="submit" className="theButton signup">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="footer_links">
                    <a href="#careers">Careers</a>
                    <div class="divider"></div>
                    <a href="#privacy-policy">Privacy Policy</a>
                    <div class="divider"></div>
                    <a href="#terms-conditions">Terms & Conditions</a>
                </div>
                <div className="footer_copyright">
                    &copy; 2021 Class CSR Ltd.
                </div>
            </div>
        </footer>
    )
}

export default Footer;