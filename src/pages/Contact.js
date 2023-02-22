import {Button, Form,Row, Col} from 'react-bootstrap'
import {Fragment} from 'react'

import logo from '../images/logo.png'
import bg from '../images/bg2.jpg'

export default function Contact(){

	return (
	<div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
		<Row className = "m-0 p-5">
			<Col className = 'col-md-6 col-10 mx-auto bg-dark p-3'>
				<Fragment>
					<div><img className="form-logo" src={logo}/></div>
					<Form className="m-4">

						{/*First Name*/}
						<Form.Group className="mb-3" controlId="formBasicFirstName">
					        <Form.Label className='label'>First Name</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="First Name"
					        	required
					        	/>
					      </Form.Group>

					      {/*Last Name*/}
						<Form.Group className="mb-3" controlId="formBasicLastName">
					        <Form.Label className='label'>Last Name</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="Last Name"
					        	required
					        	/>
					      </Form.Group>

					      {/*Contact Number*/}
						<Form.Group className="mb-3" controlId="formBasicMobileNo">
					        <Form.Label className='label'>Contact Number</Form.Label>
					        <Form.Control
					        	type="text"
					        	placeholder="+63 (123) 456789"
					        	required
					        	/>
					      </Form.Group>

					      {/*Email*/}
					      <Form.Group className="mb-3" controlId="formBasicEmail">
					        <Form.Label className='label'>Email address</Form.Label>
					        <Form.Control 
					        	type="email"
					        	placeholder="Enter email"
					        	required
					        	/>
					        <Form.Text className="text-muted">
					          We'll never share your email with anyone else.
					        </Form.Text>
					      </Form.Group>

					      {/*Message*/}
					      <Form.Group className="mb-3" controlId="formBasicPassword">
					        <Form.Label className='label'>Message</Form.Label>
					        <Form.Control as="textarea" rows={6}/>
					      </Form.Group>

					       <Form.Group className="d-flex justify-content-center mt-3">
						      <Button variant="danger" type="submit" >
						        Send  </Button>
						  </Form.Group>
					  

					      
					    </Form>
					 </Fragment>
				</Col>
		    </Row>
		    </div>



		)
}