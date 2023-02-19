import './App.css';


import AppNavBar from './components/AppNavBar.js';
// import FlippableCard from './components/FlippableCard.js';

import PageNotFound from "./pages/PageNotFound.js";
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';

import {useState,useEffect} from 'react'

// import UserProvider
import {UserProvider} from './UserContext.js'


// import modules from react-router-dom for the routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {

// useState
  const [user, setUser] = useState(null)


// useEffect
  useEffect(()=>{
    console.log(user)
  },[user]);

  const unSetUser = ()=>{
    localStorage.clear();
   
  }




  
  return (
    <UserProvider value={{user,setUser,unSetUser}}>
    <Router>
      <AppNavBar/>
      {/*<FlippableCard/>*/}
        <Routes>
        <Route path ='*' element = {<PageNotFound/>}/>
        <Route path ='/' element = {<Home/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path ='/logout' element = {<Logout/>}/>


        </Routes>
    </Router>
    </UserProvider>
        

         
  );
}

export default App;
