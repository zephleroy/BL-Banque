import React, { useContext } from 'react';
import logo from '../public/medias/argentBankLogo.png';
import { NavLink } from "react-router-dom";
import {UidContext} from "./AppContext";
import { useSelector } from 'react-redux';

const Navigation = (props) => {

    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

    const userIsLoggingOut= ()=>{
        localStorage.clear();
        window.location="./"
    }

    return (
        <div className="nav-cointainer">
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                {uid ? (
                      <div className="logger"> 
                        <div className="welcome-user">
                            <i className="fa fa-user-circle"></i>
                            <NavLink className="main-nav-item" exact to ="/Profil" activeClassName ="nav-active">
                                {userData?.body?.firstName}
                            </NavLink>
                        </div>
                        <div className="logout-display">
                            <i className="fa fa-sign-out"></i>
                            <NavLink className="main-nav-item" exact to ="/" activeClassName ="nav-active" onClick={userIsLoggingOut}>
                                Sign Out
                            </NavLink>
                        </div>
                     </div>
                ):(
                    <div> 
                        <i className="fa fa-user-circle"></i>
                        <NavLink className="main-nav-item" exact to ="/login" activeClassName ="nav-active">
                            Sign In
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navigation;