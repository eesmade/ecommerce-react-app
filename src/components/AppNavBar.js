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
		<Navbar collapseOnSelect expand="lg" className="navbar navbar-dark">
		     <Container>
		       <Navbar.Brand href="#"><img className="logo" src={logo} height="70px" width="70px"/></Navbar.Brand>
		       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		       <Navbar.Collapse id="responsive-navbar-nav">
		         <Nav className="me-auto">
		           <Nav.Link as = {NavLink} to = '/'>Home</Nav.Link>
		           <Nav.Link  as = {NavLink} to = '/sale'>Sale</Nav.Link>
		           <NavDropdown title="Shop" id="navbarScrollingDropdown">
		              <NavDropdown.Item  as = {NavLink} to = '/bags'>Bags</NavDropdown.Item>
		              <NavDropdown.Item  as = {NavLink} to = '/shirts'>Shirts</NavDropdown.Item>
		              <NavDropdown.Item  as = {NavLink} to = '/Headwears'> Headwears</NavDropdown.Item>
		              <NavDropdown.Item  as = {NavLink} to = '/Stickers'> Stickers</NavDropdown.Item>
		            </NavDropdown>
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

		         </Nav>
		         <Nav>
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
		     </Container>
		   </Navbar>
		)
}