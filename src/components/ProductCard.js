import {Button, Card, Row, Col} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext.js'
import {Link} from 'react-router-dom'

export default function ProductCard({productProp}) {

	const {_id, productName, description, category, price, isActive} = productProp;

// useStates
	const [stocks, setStocks] = useState('10');
	const [isDisabled,setIsDisabled] = useState(false)


	const {user} = useContext(UserContext)

	function checkStocks(){
		if (stocks > 1){
			setStocks(stocks -1)	
		} else{
			alert ("This item is sold out. We'll update you once stock is available.")
			// forsake of disabling button and prompting alert message
			setStocks(stocks -1)
		}
	}



	useEffect(()=> {
		if(stocks === 0){
			setIsDisabled(true);
		}
	},[stocks])


	return(
				<Row className = "mt-0 p-5">
						{/*Product Card*/}
					<Col>
						<Card>
						     <Card.Body>
						       <Card.Title>{productName}</Card.Title>
						       <Card.Subtitle>Description</Card.Subtitle>
						       	<Card.Text>{description}</Card.Text>
						       <Card.Subtitle>Price</Card.Subtitle>
						       	<Card.Text>{price}</Card.Text>


						       	<Card.Subtitle>Available Stocks:</Card.Subtitle>
						       	<Card.Text>{stocks}</Card.Text>

		{/*Ternary condition*/}

						       	{
						       	//if user is logged in
						       		user?

						        <Button as = {Link} to = {`/product/${_id}`} disabled={isDisabled} variant="primary">See details</Button>
						        :
						        //if user is logged out
						        <Button as = {Link} to ='/Login' variant="primary">Login</Button>


						        }


						     </Card.Body>
						   </Card>
						</Col>
				</Row>
		)
}