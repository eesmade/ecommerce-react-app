import ProductTable from '../components/ProductTable.js'

import {useState, useEffect, Fragment, useContext} from 'react';
import UserContext from '../UserContext.js';
import {Navigate, useNavigate,Link} from 'react-router-dom';
import {Container, Row, Col, Button } from 'react-bootstrap';


import bg from '../images/bg2.jpg'

export default function ProductDashboard(){

// useState
	const [isAdmin, setIsAdmin] = useState(false);
	const {user, setUser} = useContext(UserContext);
	const [products, setProducts] = useState([]);
	
	const navigate = useNavigate();


	return(

// user.isAdmin ?

		<Fragment>
		
		<Container fluid className="bg-light p-0">
		<div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         	{/*<h2 className='mt-3 text-center text-dark'>Products</h2>*/}
         		<Row >
                    <Col className='d-flex justify-content-center mt-3 mb-4'>
                        <Button variant='danger' as={Link} to='/product/add'>Add Product</Button>
                    </Col>
                </Row>
                <Row>
                <Col >
                    <ProductTable/>
                </Col>
                </Row>
                </div>
            </Container>
            
         </Fragment>

			// :

		// <Navigate to = "*"/>
			



		

	


		)
}