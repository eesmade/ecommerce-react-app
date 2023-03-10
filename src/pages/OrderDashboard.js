import OrderTable from '../components/OrderTable.js'

import {useState, useEffect, Fragment} from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import bg from '../images/bg2.jpg'

export default function OrderDashboard(){


	return(

		<Fragment>
		<Container fluid className="bg-light p-0">
        <div className='bg' style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         	<h2 className='p-4 text-center text-dark'>Orders</h2>
                <Row>
                <Col>
                    <OrderTable/>
                </Col>
                </Row>
                </div>
            </Container>
         </Fragment>
		)
}