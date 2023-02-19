

export default function ProductCard({productProp}) {

	const {_id,productName,description,category,price} = productProp;

// useStates
	const {user} = useContext(UserContext)
	const [stocks, setStocks] = useState('');


	return(
				<Row className = "mt-0 p-5">
						{/*Course Cards*/}
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

						       	{//if user is logged in
						       		user?

						        <Button as = {Link} to = {`/course/${_id}`} disabled={isDisabled} variant="primary">See details</Button>
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