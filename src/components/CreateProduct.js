import {Button, Form,Row, Col} from 'react-bootstrap'
import {Fragment} from 'react'


import {useState, useEffect, useContext} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext.js';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

export default function CreateProduct() {

// useStates
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stocks, setStocks] = useState('');
    

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();


// Add Product
      function addProduct(event) {
        event.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/product/add`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                productName:productName,
                description:description,
                category: category,
                price: price,
                stocks: stocks
             
            })
        })
        .then(result => result.json())
        .then(data => {
					console.log(data)

					if(data==false){
				// Error Alert Message
						Swal.fire({
							title: 'Something went wrong!',
							icon: 'warning',
							text: 'Please try again.'
						})
					}else{
				// Success Alert Message
						Swal.fire({
							title: 'Added Successfully!',
							icon: 'success',
							text: 'The item has been added!'
						})

						navigate('/admin');
					}
				})
    }

  return (

    <Row className = "m-0 p-5">
    			<Col className = 'col-md-6 col-10 mx-auto bg-light p-3'>
    				<Fragment>
    					<h1 className="text-center mt-5">Add Product</h1>
    					<Form className="m-4" onSubmit={event => addProduct(event)}>

    						{/*ProductName*/}
    						<Form.Group className="mb-3" controlId="formProductName">
    					        <Form.Label>ProductName</Form.Label>
    					        <Form.Control
    					        	type="text"
    					        	placeholder="Product Name"
    					        	value = {productName}
    					        	onChange = {event => setProductName(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>

    					      {/*Description*/}
    						<Form.Group className="mb-3" controlId="formProductDescription">
    					        <Form.Label>Description</Form.Label>
    					        <Form.Control
    					        	type="text"
    					        	placeholder="Description"
    					        	value = {description}
    					        	onChange = {event => setDescription(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>

    					      {/*Category*/}
    						<Form.Group className="mb-3" controlId="formProductCategory">
    					        <Form.Label>Category</Form.Label>
    					        <Form.Select id="category" value = {category}
    					        	onChange = {event => setCategory(event.target.value)}
    					        	required>
    					                    <option>Shirt</option>
    					                    <option>Headwear</option>
    					                    <option>Stickers</option>
    					        </Form.Select>
    					      </Form.Group>

    					      {/*Price*/}
    					      <Form.Group className="mb-3" controlId="formPrice">
    					        <Form.Label>Price</Form.Label>
    					        <Form.Control 
    					        	placeholder="Price"
    					        	value = {price}
    					        	onChange = {event => setPrice(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>

    					        {/*Stocks*/}
    					      <Form.Group className="mb-3" controlId="formStocks">
    					        <Form.Label>Stocks</Form.Label>
    					        <Form.Control 
    					        	placeholder="Stocks"
    					        	value = {stocks}
    					        	onChange = {event => setStocks(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>


    					      <Form.Group className="d-flex justify-content-center mt-3">
    				
    							  <Button variant="dark" type="submit" className="px-5">
    						        Add Product
    						      </Button>
    						     
    						  </Form.Group>

    					      
    					    </Form>
    					 </Fragment>
    				</Col>
    		    </Row>
  )
}

