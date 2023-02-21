import './App.css';


import AppNavBar from './components/AppNavBar.js';

// import PageNotFound from "./pages/PageNotFound.js";
import ProductDashboard from './pages/ProductDashboard.js';
import OrderDashboard from './pages/OrderDashboard.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Logout from './pages/Logout.js';
import Shop from './pages/Shop.js';
import Sale from './pages/Sale.js';
import ProductView from './components/ProductView.js'
import CreateProduct from './components/CreateProduct.js'
import UpdateProduct from './components/UpdateProduct.js'
import ArchiveProduct from './components/ArchiveProduct.js'


import {useState,useEffect} from 'react'

// import UserProvider
import {UserProvider} from './UserContext.js'


// import modules from react-router-dom for the routing
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




export default function App() {

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
        <Routes>
        {/*<Route path ='*' element = {<PageNotFound/>}/>*/}
        <Route path ='/admin/product' element = {<ProductDashboard/>}/>
        <Route path ='/admin/order' element = {<OrderDashboard/>}/>
        <Route path ='/' element = {<Home/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path ='/logout' element = {<Logout/>}/>
        <Route path ='/shop' element = {<Shop/>}/>
        <Route path ='/sale' element = {<Sale/>}/>
        <Route path ='/product/:productId' element = {<ProductView/>}/>
        <Route path ='/product/add' element = {<CreateProduct/>}/>
        <Route path ='/update/:productId' element = {<UpdateProduct/>}/>
        <Route path ='/archive/:productId' element = {<ArchiveProduct/>}/>


        </Routes>
    </Router>
    </UserProvider>
        

         
  );
}


