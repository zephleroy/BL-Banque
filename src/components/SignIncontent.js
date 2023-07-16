import React, {useState} from 'react';
import axios from 'axios';



const SignIncontent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const  handleLogin =(e)=>{
        e.preventDefault();
        const identificationError = document.getElementById('identification-error');

        axios({
            method: "post",
            url:`${process.env.REACT_APP_API_URL}api/v1/user/login`,
            data: {
                 email:username,
                password:password,
            },
        })
        .then((res)=>{
            localStorage.setItem("token", res.data.body.token);
            window.location='/profil';
        })
        .catch((err) => {
            identificationError.innerHTML = "Vos identifiants sont incorrects !";
            console.log(err.data);
            console.log(identificationError)
        })
    };
                
    return (
        <section className="sign-in-content">
            
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
           
            <form action="" onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                        minLength="2"
                        maxLength="15"
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label >
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            minLength="2"
                            maxLength="15"
                        />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div id="identification-error"></div>
                <button type="submit" className="sign-in-button">Sign in</button>
            </form>
        </section>
    );
};

export default SignIncontent;