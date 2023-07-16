import React, {useContext} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SignIncontent from '../components/SignIncontent';
import { UidContext } from '../components/AppContext';
import { Redirect } from 'react-router-dom';


const Login = () => {

    const uid = useContext(UidContext);

    if(uid){
        return <Redirect to={
            {
                pathname:"/Profil",
                state:{}
            }
        }/>
    }
   
    return (
        <div className="login">
            <Navigation/>
            <main className="main bg-dark-login">
                <SignIncontent />
            </main>
            <Footer/>
        </div>
    );
};

export default Login;