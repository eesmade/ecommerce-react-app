import {Button, Form,Row, Col} from 'react-bootstrap'
import {Fragment} from 'react'

// import the hooks needed in our page
import {useState,useEffect,useContext} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import UserContext from '../UserContext.js'

import Swal from 'sweetalert2'

import logo from '../images/logo.png'
import bg from '../images/bg2.jpg'




export default function() {
// useStates
	//states to store value from the inputs of the following:
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [confirmPassword,setConfirmPassword] = useState('')
	
	const [contactNo, setContactNo] = useState('');


	//use data update to global
	const {user,setUser} = useContext(UserContext)


	//isActive button
	const [isActive, setIsActive] = useState(false);

	const navigate = useNavigate();



// useEffects
	// useEffect to enable/disable button
		useEffect(()=>{
			if(email!== "" && password !=="" && confirmPassword !=="" && password === confirmPassword){
				setIsActive(true)
			} else {
				setIsActive(false)
			}

		}, [email, password, confirmPassword])




// Submit Functionality
			function register(event){
				event.preventDefault()


		// Fetch request
		// Registration
				fetch(`${process.env.REACT_APP_API_URL}/user/register`,{
					method:'POST',
					headers: {
						'Content-Type':'application/json'
					},
					body:JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						email: email,
						password: password,
						contactNo: contactNo
					})
				})
				.then(result => result.json())
				.then(data => {
					console.log(data)

					if(data==false){
				// Error Alert Message
						Swal.fire({
							title: 'Registration failure!',
							icon: 'warning',
							text: 'User with this email address already exists. Please login.'
						})
					}else{
				// Success Alert Message
						Swal.fire({
							title: 'Registration complete!',
							icon: 'success',
							text: 'Thank you for signing up!'
						})

						navigate('/login');
					}
				})



			}





	return (
		user ?
		<Navigate to = '/*' />
		:
	<div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
		<Row className = "m-0 p-5">
			<Col className = 'col-md-6 col-10 mx-auto bg-dark p-3'>
				<Fragment>
					<div><img className="form-logo" src={logo}/></div>
					<Form className="m-4" onSubmit={event => register(event)}>

						{/*First Name*/}
						<Form.Group className="mb-3" controlId="formBasicFirstName">
					        <Form.Label className='label'>First Name</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="First Name"
					        	value = {firstName}
					        	onChange = {event => setFirstName(event.target.value)}
					        	required
					        	/>
					      </Form.Group>

					      {/*Last Name*/}
						<Form.Group className="mb-3" controlId="formBasicLastName">
					        <Form.Label className='label'>Last Name</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="Last Name"
					        	value = {lastName}
					        	onChange = {event => setLastName(event.target.value)}
					        	required
					        	/>
					      </Form.Group>

					      {/*Contact Number*/}
						<Form.Group className="mb-3" controlId="formBasicMobileNo">
					        <Form.Label className='label'>Contact Number</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="+63 (123) 456789"
					        	value = {contactNo}
					        	onChange = {event => setContactNo(event.target.value)}
					        	required
					        	/>
					      </Form.Group>

					      {/*Email*/}
					      <Form.Group className="mb-3" controlId="formBasicEmail">
					        <Form.Label className='label'>Email address</Form.Label>
					        <Form.Control 
					        	type="email"
					        	placeholder="Enter email"
					        	value = {email}
					        	onChange = {event => setEmail(event.target.value)}
					        	required
					        	/>
					        <Form.Text className="text-muted">
					          We'll never share your email with anyone else.
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
					        	required
					        	/>
					      </Form.Group>

					      {/*Confirm Password*/}
					       <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
					        <Form.Label className='label'>Confirm Password</Form.Label>
					        <Form.Control
					        	type="password"
					        	placeholder="Confirm your Password"
					        	value = {confirmPassword}
					        	onChange = {event => setConfirmPassword(event.target.value)}
					        	required
					        	/>
					      </Form.Group>
					   



					      {/*code block for conditional rendering depending on the state of our isActive*/}
					      {/*ternary operator
					      		?condition true : false*/ }

					      <Form.Group className="d-flex justify-content-center mt-3">
						   {
						   	isActive?
							   	<Button variant="danger" type="submit">
						        Sign Up
						      </Button>
						      :
						      <Button variant="secondary" type="submit" disabled>
						        Sign Up
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