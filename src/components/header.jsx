import React from "react";
import '../styles/components/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                    </ul>
                </div>
                <div className="login-signup">
                    <Link to='/login' className="button login">Login</Link>
                    <Link to='/register' className="button signup">Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default Header;