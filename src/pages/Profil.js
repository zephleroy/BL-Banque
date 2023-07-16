import React, { useContext } from 'react';
import Account from '../components/Account';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import WelcomeUser from '../components/WelcomeUser';
import { UidContext } from '../components/AppContext';
import { Redirect } from 'react-router-dom';


const Profil = () => {
    const uid = useContext(UidContext);
    
    if(!uid){
        return <Redirect to={
            {
                pathname:"/profil",
                state:{}
            }
        }/>
    }else{
        <Redirect to={
            {
                pathname:"/",
                state:{}
            }
        }/>
    }
    
    return (
        <div className="profil">
            <Navigation/>
            <main className="main bg-dark-profil">  
                <WelcomeUser/>
                <Account/>
            </main>
            <Footer/>
        </div>
    );
};

export default Profil;