import {Button,Container, Form, Nav, Navbar,NavDropdown} from 'react-bootstrap'

// Images
import logo from '../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {Fragment, useState,useEffect,useContext} from 'react'

import UserContext from '../UserContext.js'


export default function AppNavBar(){

// useStates
	// allows to consume the UserContext object and its properties for user validation;
	const {user,setUser} = useContext(UserContext)


	return(
		<Fragment>
		{/*Top Banner*/}
		<div className="container-fluid text-center fixed-top" id="banner">
		     <div className="row">
		         <h6> Free shipping for orders worth ₱2000 and above </h6>
		     </div>
		</div>

		{/*Main Nav*/}
		<Navbar collapseOnSelect expand="lg" className="navbar navbar-dark mt-3 mb-0 pb-0 container-fluid">
		       <Navbar.Brand href="#"><img className="logo mx-4" src={logo} height="70px" width="70px"/></Navbar.Brand>
		       <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-2" />
		       <Navbar.Collapse id="responsive-navbar-nav">
		         <Nav className="me-auto">
		         {

		         	user && user.isAdmin?
		         	<Fragment>
		         	<Nav.Link as = {NavLink} to = '/'>Home</Nav.Link>
		         	<Nav.Link as ={NavLink} to='/admin/products'>Products</Nav.Link>
		         	<Nav.Link as ={NavLink} to='/admin/orders'>Orders</Nav.Link>
		         	</Fragment>


		         	:

		         <Fragment>
		           <Nav.Link as = {NavLink} to = '/'>Home</Nav.Link>
		           <Nav.Link  as = {NavLink} to = '/sale'>Sale</Nav.Link>
		           <Nav.Link  as = {NavLink} to = '/shop'>Shop</Nav.Link>
		            <NavDropdown title="Partners" id="navbarScrollingDropdown">
		              <NavDropdown.Item href="#action5">Bergel</NavDropdown.Item>
		              <NavDropdown.Item href="#action6">Cong Clothing</NavDropdown.Item>
		              <NavDropdown.Item href="#action7">Mosh</NavDropdown.Item>
		              <NavDropdown.Item href="#action8">Nemesis</NavDropdown.Item>
		              <NavDropdown.Divider />
		              <NavDropdown.Item href="#action9">
		                Collaborate
		              </NavDropdown.Item>
		            </NavDropdown>
		            <Nav.Link  as = {NavLink} to = '/contact'>Contact</Nav.Link>
		            </Fragment>
		         }

		         </Nav>
		         

		         <Nav className="mx-5">
		          <Nav.Link  as = {NavLink} to = '/myOrders'>My Orders</Nav.Link>
{/*Ternary Condition*/}
		         {
		         	user?

		         	<Nav.Link  as = {NavLink} to = '/logout'>Logout</Nav.Link>

		         	:
		         <Fragment>
		         	<Nav.Link  as = {NavLink} to = '/register'>Sign Up</Nav.Link>
		         	<Nav.Link eventKey={2}  as = {NavLink} to = '/login'>
		         	  Login
		         	</Nav.Link>
		         </Fragment>



		         }
		          
		         </Nav>
		       </Navbar.Collapse>
		   </Navbar>
		 </Fragment>
		)
}

