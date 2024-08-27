import React, { useState, useEffect } from "react";
import '../styles/components/header.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {

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
                <ul class="navList">
                    <img className="profilepic" src="https://images.unsplash.com/photo-1613053341193-2b7f654c155f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </ul>
            </div>
        </>
    )
}
