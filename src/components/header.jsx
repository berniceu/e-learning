import React from "react";

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="container">
                <div className="logo">

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
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header;