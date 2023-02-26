import React from "react";
import { useState } from "react";
import SignUp from "../SignUp/SignUp";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);

    function deleteHandler(){
        setState(true);
    }
    function closeHandler(){
        setState(false)
    }

    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div className="login">
            <p>{props.text}</p>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="login-btn" onClick={props.onClose} disabled={!validateForm()}>
                Login
            </button>
            <button className="signUp-btn" onClick={deleteHandler}>
          SignUp
            </button>
            {state && <SignUp text="SignUp" onClick={closeHandler}/>}
            </form>
        </div>
    )
}