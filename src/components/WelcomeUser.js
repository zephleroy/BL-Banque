import axios from 'axios';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
const token = localStorage.getItem("token");


const WelcomeUser = () => {
    
    const userData = useSelector((state) => state.userReducer);
    const [updateProfile, setupdateProfile] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    // handle "undefined" error
    if(!userData.body) {
        return null
    }

    const updateUserData =(e)=>{
        e.preventDefault();
        
        axios({
            method: 'put',
            url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                firstName:firstname,
                lastName:lastname,
            },
        })
        .then((res) => {
              setFirstName(res.data.body.firstName);
        })
        .catch(err => console.log(err));
        
        setupdateProfile(!updateProfile)
        window.location="./profil";
    }

    return (
        <div className="welcome-user-display">
            <div className="header">
                <h1 className="welcome-back">Welcome back </h1>
                {updateProfile === false && (
                    <>
                        <h1 className="name-user"> {userData.body.firstName} {userData.body.lastName} !</h1>
                        <button className="edit-button" onClick={()=>setupdateProfile(!updateProfile)}>Edit Name</button>
                    </>
                )}
                {updateProfile &&(
                    <>
                        <form action="" onSubmit={updateUserData} className="update-profil-user">
                            <input
                                type="text" 
                                id="firstName"
                                name="firstName-user"
                                onChange={(e) =>setFirstName(e.target.value)}
                                value={firstname}
                                placeholder={userData.body.firstName}
                                minLength="2" required
                                maxLength="15" 
                            />
                            <input
                                type="text" 
                                id="lastName"
                                name="lastName-user"
                                onChange={(e) =>setLastName(e.target.value)}
                                value={lastname}
                                placeholder={userData.body.lastName}
                                minLength="2" required
                                maxLength="15"
                            />
                            <br/>
                            <button  className="save-button" type="submit" >Save</button>
                            <button className="cancel-button" onClick={()=>setupdateProfile(!updateProfile)}>Cancel</button>
                        </form>
                    </>
                )}
                
            </div>
        </div>
    );
};

export default WelcomeUser;