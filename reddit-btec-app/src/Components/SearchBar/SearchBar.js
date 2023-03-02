import React from "react";
import logo from '../../images/Reddit-Logo.png';
import '../SearchBar/SearchBar.css';
import { useAuth0 } from "@auth0/auth0-react";


export const SearchBar = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();

    return (
        <nav className="nav" href='/home'>
            <img src={logo} className="Logo" alt="logo" />
            <input 
            type='text'
            placeholder="Search"
            className="searchBar"
            />
            {!isLoading && !user && (
            <button
            className="loginBtn"
             onClick={() => loginWithRedirect()}>
                Login
             </button>
        )}
        { user && (
            <button
            className=""
             onClick={() => logout()}>
                Logout
            </button>
        )}
        </nav>
    )
}