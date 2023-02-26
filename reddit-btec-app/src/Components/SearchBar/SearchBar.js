import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';

export const SearchBar = () => {

    return (
        <nav className="nav">
            <img src={logo} className="Logo"/>
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            />
            <button className="loginBtn"><a href="#">Login</a></button>
        </nav>
    )
}