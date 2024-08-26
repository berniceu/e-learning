import { FaSearch } from 'react-icons/fa';
import React, { useState, useEffect } from "react";
import '../../styles/main/main.css';
import { NavLink } from 'react-router-dom';


const AdminHeader = () => {
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
                    <li>  <NavLink to="/admin" end className="link" >Dashboard</NavLink> </li>
                </ul>
                <ul class="navList">
                    <img className="profilepic" src="https://images.unsplash.com/photo-1613053341193-2b7f654c155f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </ul>
            </div>
        </nav>
    )
}


export default AdminHeader;