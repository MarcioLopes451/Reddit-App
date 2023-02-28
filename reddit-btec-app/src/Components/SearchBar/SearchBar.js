import React from "react";
import { useState } from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import Login from "../../Containers/Login/LogIn/Login";
import Background from "../../Containers/Login/LogIn/Background";
export const SearchBar = () => {
    const [state, setState] = useState(false);
    

    function deleteHandler(){
        setState(true);
    }
    function closeHandler(){
        setState(false)
    }
    return (
        <nav className="nav">
            <img src={logo} className="Logo" alt="logo"/>
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            />
            <button className="loginBtn" onClick={deleteHandler}><a href="#">Login</a></button>
            {state && <Background onClick={closeHandler}/>}
            {state && <Login text="Login" onClick={closeHandler}/>}
        </nav>
    )
}