import React from "react";
import { useState } from "react";
import SignUp from "../SignUp/SignUp";
import { logIn } from "../SignUp/userSlice";
import { useDispatch } from "react-redux";



export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

   


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
        dispatch(logIn({username : username, password : password}))

        

    }

    return (
        <div className="login">
            <p>{props.text}</p>
            <p className="policy">
            By continuing, you agree are setting up a 
            Reddit account and agree to our <span className="links">User Agreement</span> and <span className="links">Privacy Policy</span>.
            </p>
            <form onSubmit={handleSubmit}>
                <input
                className="usernameBar"
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                className="passwordBar"
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="login-btn" onClick={props.onClose} disabled={!validateForm()}>
                Login
            </button>
            <p>New to Reddit? <a onClick={deleteHandler}>Sign Up</a></p>
            {state && <SignUp text="SignUp" onClick={closeHandler}/>}
            </form>
        </div>
    )
}