import ProductTable from '../components/ProductTable.js'
import ProductCard from '../components/ProductCard.js';

import {useState, useEffect, Fragment, useContext} from 'react';
import UserContext from '../UserContext.js';
import {Navigate, useNavigate,Link} from 'react-router-dom';
import {Tab, Tabs} from 'react-bootstrap/Tab';
import {Container, Row, Col, Button } from 'react-bootstrap';



export default function ProductDashboard(){

// useState
	const [isAdmin, setIsAdmin] = useState(false);
	const {user, setUser} = useContext(UserContext);
	const [products, setProducts] = useState([]);
	
	const navigate = useNavigate();


	return(

// user.isAdmin ?

		<Fragment>
		<Container fluid className="bg-light py-3">
         	<h2 className='mt-3 mb-5 text-center text-dark'>Products</h2>
                <Row>
                <Col >
                    <ProductTable/>
                </Col>
                </Row>
                <Row >
                    <Col className='d-flex justify-content-center mt-3'>
                        <Button as={Link} to='/product/add'>Add New Product</Button>
                    </Col>
                </Row>
            </Container>
         </Fragment>

			// :

		// <Navigate to = "*"/>
			



		

	


		)
}