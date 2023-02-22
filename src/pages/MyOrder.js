import {Fragment} from 'react'
import {Container, Row, Col, Button, Table} from "react-bootstrap";

import MyOrderDetails from '../components/MyOrderDetails.js'


export default function MyOrder(){

	return(

		<Fragment>
		 <Container className='text-center'>
		 	<MyOrderDetails/>
		 </Container>
		</Fragment>
		)
}