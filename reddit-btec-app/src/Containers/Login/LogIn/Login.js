import React from "react";
import { useState, useRef, useEffect} from "react";
import SignUp from "../SignUp/SignUp";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, SetErrMsg] = useState('')
    const userRef = useRef();
    const errRef = useRef();
    
   { /*useEffect(() => {
        userRef.current.focus();
    }, [])*/
}

    useEffect(() => {
        SetErrMsg('');
    }, [username, password])


    return (
        <section className="login">
            <p ref={errRef} 
            className={errMsg ? 'errmsg' : 'offscreen'} 
            aria-live='assertive'>
                {errMsg}
            </p>
            <p>{props.text}</p>
            <p className="policy">
            By continuing, you agree are setting up a 
            Reddit account and agree to our <span className="links">User Agreement</span> and <span className="links">Privacy Policy</span>.
            </p>
            <form>
                <label htmlFor="username">
                    Username
                </label>
                <input
                type='text'
                id="username"
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
                value={username} 
                required
                />
                <br />
                <label htmlFor="password">
                    Password
                </label>
                <input
                type='password'
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                required
                />
                <button>Login</button>
            </form>
        </section>
    )
}