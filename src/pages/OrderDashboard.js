
import {useState, useEffect, Fragment} from 'react';
import {Container, Row, Col } from 'react-bootstrap';



export default function OrderDashboard(){


	return(

		<Fragment>
		<Container fluid className="bg-light py-3">
         	<h2 className='mt-3 mb-5 text-center text-dark'>Orders</h2>
                <Row>
                <Col >
                    {/*<OrderTable/>*/}
                </Col>
                </Row>
            </Container>
         </Fragment>
		)
}