import React from "react";
import { useState } from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import Login from "../../Containers/Login/LogIn/Login";
import Background from "../../Containers/Login/LogIn/Background";
import { NavLink } from "react-router-dom";
import { selectCurrentUser, logOut, logIn} from "../../Containers/Login/SignUp/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const SearchBar = () => {
    const [state, setState] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const login = () => {
        if(logIn){
            dispatch(currentUser())
        }
    }

    const handleLogOut = e => {
        dispatch(logOut());
    }
    function deleteHandler(){
        setState(true);
    }
    function closeHandler(){
        setState(false)
    }
    return (
        <nav className="nav" href='searchBar'>
            <img src={logo} className="Logo" alt="logo" />
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            />
            <button className="loginBtn" onClick={deleteHandler}><a href="#" onClick={login}>login</a></button>
            {state && <Background onClick={closeHandler}/>}
            {state && <Login text="Login" onClick={closeHandler}/>}
        </nav>
    )
}