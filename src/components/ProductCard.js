import {Button, Card, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext, Fragment} from 'react';
import UserContext from '../UserContext.js'
import {Link} from 'react-router-dom'

export default function ProductCard({productProp}) {

	const {_id, productName, description, price, image} = productProp;

// useStates
	const [isDisabled,setIsDisabled] = useState(false)


	const {user} = useContext(UserContext)

	// function checkStocks(){
	// 	if (stocks > 1){
	// 		setStocks(stocks -1)	
	// 	} else{
	// 		alert ("This item is sold out. We'll update you once stock is available.")
	// 		// forsake of disabling button and prompting alert message
	// 		setStocks(stocks -1)
	// 	}
	// }



	// useEffect(()=> {
	// 	if(stocks === 0){
	// 		setIsDisabled(true);
	// 	}
	// },[stocks])


	return(

<Fragment>
	<Row className = "mt-0 p-5 d-flex d-inline-flex text-center">
	<Col>
		<Card style={{ width: '18rem' }}>
		      <Card.Img variant="top" src={image} />
		      <Card.Body>
		      	<Card.Title>{productName}</Card.Title>
		       	<Card.Text>{description}</Card.Text>
		       	<Card.Subtitle>Price</Card.Subtitle>
		       	<Card.Text>{price}</Card.Text>
		      

		        {
		       	//if user is logged in
		       		user?

		        <Button as = {Link} to = {`/product/${_id}`} disabled={isDisabled} variant="danger">View</Button>
		        :
		        //if user is logged out
		        <Button as = {Link} to ='/Login' variant="danger">Login</Button>


		        }

		      </Card.Body>
		    </Card>


		
				</Col>
			</Row>
	</Fragment>
	)
}