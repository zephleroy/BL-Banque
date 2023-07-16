import './App.css';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Profil from './pages/Profil';
import { useEffect, useState } from 'react';
import { UidContext } from './components/AppContext';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';

const token = localStorage.getItem("token")

function App() {

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const fetchToken = async() => {
      axios({
        method: 'post',
          url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
          headers: {
            Authorization: `Bearer ${token}`
          },
      })
      .then((res) => setUid(res.data.body.id))
      .catch(err => console.log(err));
    }
    fetchToken();

    if(uid)dispatch(getUser())
  },[uid])
  

  return (
    <div className="App">
        
      <UidContext.Provider value={uid}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/profil" exact component={Profil}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </UidContext.Provider>
    </div>
  );
}

export default App;
