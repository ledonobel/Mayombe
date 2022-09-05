import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase'




function Login(){
    // to track information registered
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [logInEmail, setlogInEmail] = useState("");
//const [logInpassword, setlogInPassword] = useState("")
    const signIn = e => {
            e.preventDefault();
            //firebase

    }
    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            password,
            email
        );
            console.log(user)
        } catch (error){
            console.log(error.message)
        }

    };

    return(

        <div className="login">
            <Link to="/">
            <img className="login_logo" src="/images/mmm.jpg" alt=""/>
             </Link>  
         <div className="login_container">
             <h1>Sign In</h1>

             <form>
                <h4>Email</h4>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h4>Password</h4>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit"  onClick={signIn} className="login_signInButton">Sign in</button>

             </form>
             <p>
                 By signing in you agree to the MAYOMBE conditions of Use & Sale. 
                 Please see our Privacy Notice, our Cookies Notice and our Interest-Based
                 Ads Notice.
             </p>
             <button onClick={register} className="login_registerButton">Create Your Mayombe Account</button>
             
             
             </div>     

        </div>
    )

}
 export default Login;

    