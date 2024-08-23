import React from "react";
import '../styles/components/header.css';

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Mentorship</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="login-signup">
                    <a href="#" className="button login">Login</a>
                    <a href="#" className="button signup">Sign Up</a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header;