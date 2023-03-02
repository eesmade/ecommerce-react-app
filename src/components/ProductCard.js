import {Container, Button, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
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
	
	<Row className = "p-3 d-flex d-md-inline-flex text-center">
		<Col className="col-xs-12 col-md-8">
			<Card className='card-container'>
			      <Card.Body>
			      	<Card.Img className='card-image-catalog' variant="top" src={image} />
			      	<h6><strong>{productName}</strong></h6>
			       	<p className='mt-2'><em>{description}</em></p>
			       	{/*<Card.Subtitle>Price</Card.Subtitle>*/}
			       	<Card.Text>₱{price}</Card.Text>
			      

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