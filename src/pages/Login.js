import {Button, Form, Row,Col} from 'react-bootstrap'
import {Fragment} from 'react'

import {useState,useContext,useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

import UserContext from '../UserContext.js'
import Swal from 'sweetalert2'


import logo from '../images/logo.png'
import bg from '../images/bg2.jpg'



export default function Login(){

	// UseStates
	// email, password
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	const navigate = useNavigate();

	// allows to consume the UserContext object and its properties for user validation;
	const {user,setUser} = useContext(UserContext)

	// console.log(user)


	// isActive button
	const [isActive, setIsActive] = useState(false);



// UseEffects
	useEffect(()=> {
		if (email !=="" && password !==""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}

	},[email,password])


// Submit Functionality
	function login(event){
		event.preventDefault();


// 	Fetch Request to corresponding API
// Login Function

		// Syntax: fetch ('url',{options});

		fetch(`${process.env.REACT_APP_API_URL}/user/login`,{
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})

		})
		.then(result => result.json())
		.then(data => {
			// console.log(data)

			if (data === false){
	// Error Alert Message
				Swal.fire({
					title: 'Authentication failed!',
					icon: 'error',
					text: 'Please verify and try again.'
				})
			
			}else{
				localStorage.setItem('token',data.auth);

				// invoke function to get user details
				retrieveUserDetails(localStorage.getItem('token'));

	// Success Alert Message
				Swal.fire({
					title: 'Authentication succesful!',
					icon: 'success',
					text: 'Welcome to ArtShirt Kapital!'
				})

				navigate('/');
			}
		})

	}


	// to fetch user details of logged in user
	const retrieveUserDetails = (token) => {
		// the token sent as part of the request header information
		fetch(`${process.env.REACT_APP_API_URL}/user/details`,{
			headers:{
				Authorization: `Bearer ${token}`
			}
		})
		.then(result => result.json())
		.then(data => {
			// console.log(data)
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}




	return(
			user ?
			<Navigate to = '/*' />
			:
	<div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
		<Row className = "p-5">
		  <Col className = 'col-10 col-md-10 col-lg-7 mx-auto bg-dark p-3'>
			<Fragment>
				<div><img className="form-logo" src={logo}/></div>
				<Form className='m-5' onSubmit={event => login(event)}>
					{/*Email*/}
				      <Form.Group className="mb-3" controlId="formBasicEmail">
				        <Form.Label className='label'>Email address</Form.Label>
				        <Form.Control 
				        type="email"
				        placeholder="Enter email"
				        value = {email}
				        onChange = {event => setEmail(event.target.value)}
				        required />
				        <Form.Text className="text-muted">
				         Don't have an account? Signup
				        </Form.Text>
				      </Form.Group>

				    {/*Password*/}
				      <Form.Group className="mb-3" controlId="formBasicPassword">
				        <Form.Label className='label'>Password</Form.Label>
				        <Form.Control
				        type="password"
				        placeholder="Password"
				        value = {password}
				        onChange = {event => setPassword(event.target.value)}
				        required />
				        <Form.Text className="text-muted">
				         Forgot Password?
				        </Form.Text>
				      </Form.Group>


				      <Form.Group className="d-flex justify-content-center mt-3">
		{/*Ternary Condition*/}
				      {
				         	isActive?
				      	   	<Button variant="danger" type="submit">
				              Login
				            </Button>
				            :
				            <Button variant="secondary" type="submit" disabled>
				              Login
				            </Button>

				      }
				      </Form.Group>

				     
				    </Form>
				</Fragment>
			 </Col>
			
	    </Row>
	     </div>

		)
	
}