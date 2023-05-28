import React from "react";
import './Login.css'

function Login()
{
    return(
        <div className="sign-in__form">
            <h2>Welcome Back!</h2>
            <form>
                <input type="text" placeholder="Login" className="login__acc"/>
                <input type="password" placeholder="Password" className="password__acc"/>
                <button className="button__login" >Login</button>
            </form>
        </div>
    )
}

export default Login;