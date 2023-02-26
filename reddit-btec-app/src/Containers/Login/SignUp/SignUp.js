import React from "react";
import { useState } from "react";

export default function SignUp(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                SignUp
            </button>
            </form>
        </div>
    )
}