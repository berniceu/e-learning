import { FaSearch } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import '../styles/main/main.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [loading, setLoading] = useState(true)
    const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false)
    const openUSerDetails = () => { setIsUserDetailsOpen(true) }
    const closeUserDetails = () => { setIsUserDetailsOpen(false) }

    return (
        <nav className="header">
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="nav-components">
                <ul class="navList">
                    <li> <NavLink to="/" end className="link" >Home</NavLink> </li>
                    <li>  <NavLink to="/courses" end className="link" >Courses</NavLink> </li>
                </ul>
                <ul class="navList">
                    <button class="bttn login">Log in</button>
                    <button class="bttn signup">Sign up</button>
                </ul>
            </div>
        </nav>
    )
}

export default Header;