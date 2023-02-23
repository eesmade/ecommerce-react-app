import {Button, Form,Row, Col} from 'react-bootstrap'
import {Fragment} from 'react'

import {useState, useEffect, useContext} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext.js';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

import logo from '../images/logo.png'

export default function CreateProduct() {

// useStates
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stocks, setStocks] = useState('');
    const [image, setImage] = useState('');
    

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
                stocks: stocks,
                image: image
             
            })
        })
        .then(result => result.json())
        .then(data => {
					// console.log(data)

					if(data==false){
				// Error Alert Message
						Swal.fire({
							title: 'Unauthorized!',
							icon: 'error',
							text: 'You do not have permission to perform this action.'
						})
					}else{
				// Success Alert Message
						Swal.fire({
							title: 'Added Successfully!',
							icon: 'success',
							text: 'The item has been added!'
						})

						navigate('/admin/product');
					}
				})
        // .catch(error => console.log(error))
    }

  return (

    <Row className = "m-0 p-5">
    			<Col className = 'col-md-6 col-10 mx-auto bg-dark p-3'>
    				<Fragment>
                    <div><img className="form-logo" src={logo}/></div>
    					<Form className="m-4" onSubmit={event => addProduct(event)}>

    						{/*ProductName*/}
    						<Form.Group className="mb-3" controlId="formProductName">
    					        <Form.Label className='label'>Product Name</Form.Label>
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
    					        <Form.Label className='label'>Description</Form.Label>
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
                                <Form.Label className='label'>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Category"
                                    value = {category}
                                    onChange = {event => setCategory(event.target.value)}
                                    required
                                    />
                              </Form.Group>
    						

    					      {/*Price*/}
    					      <Form.Group className="mb-3" controlId="formPrice">
    					        <Form.Label className='label'>Price</Form.Label>
    					        <Form.Control 
    					        	placeholder="Price"
    					        	value = {price}
    					        	onChange = {event => setPrice(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>

    					        {/*Stocks*/}
    					      <Form.Group className="mb-3" controlId="formStocks">
    					        <Form.Label className='label'>Stocks</Form.Label>
    					        <Form.Control 
    					        	placeholder="Stocks"
    					        	value = {stocks}
    					        	onChange = {event => setStocks(event.target.value)}
    					        	required
    					        	/>
    					      </Form.Group>

                               {/*Image Link*/}
                              <Form.Group className="mb-3" controlId="formImage">
                                <Form.Label className='label'>Image File</Form.Label>
                                <Form.Control 
                                    placeholder="Image Link"
                                    value = {image}
                                    onChange = {event => setImage(event.target.value)}
                                    required
                                    />
                              </Form.Group>


    					      <Form.Group className="d-flex justify-content-center mt-3">
    				
    							  <Button variant="danger" type="submit" className="px-5">
    						        Add New Product
    						      </Button>
    						     
    						  </Form.Group>

    					      
    					    </Form>
    					 </Fragment>
    				</Col>
    		    </Row>
  )
}

