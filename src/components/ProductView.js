import {useContext, useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

import add from '../images/add.png'
import sub from '../images/sub.png'

export default function ProductView(){

// useContext
const {user,setUser} = useContext(UserContext);

// useStates

	const [userId,setUserId] = useState({user})
	const [productName,setProductName] = useState('')
	const [description,setDescription] = useState('')
	const [category, setCategory] = useState('');
	const [price,setPrice] = useState('')
	const [stocks, setStocks] = useState('');
	const [image, setImage] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [totalOrder, setTotalOrder] = useState('');


	const navigate = useNavigate()

// useParams
	const {productId} = useParams();


// Quantity
	const addQuantity = () => setQuantity(quantity+1);
	const subQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity-1)
		}
	}

// Transaction Number
	const getRandom = Math.floor(Math.random() * 1000000000)


// useEffect
	useEffect(()=>{
		// console.log(productId)

		// browser address
		fetch (`${process.env.REACT_APP_API_URL}/product/${productId}`)
		.then(result => result.json())
		.then(data => {
			// console.log(data)

			setProductName(data.productName)
			setDescription(data.description)
			setCategory(data.category)
			setPrice(data.price)
			setStocks(data.stocks)
			setImage(data.image)

		})

	},[productId])


const order =() =>{
		fetch(`${process.env.REACT_APP_API_URL}/order/${productId}`,{
			method: 'POST',
			headers:	{
				'Content-Type' :'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				userId: userId,
				productId:productId,
				productName: productName,
				description: description,
				quantity: quantity,              
				totalOrder:totalOrder
			})
		})
		.then(result => result.json())
		.then(data => {
			console.log(data);
			if(data==false){
				Swal.fire({
					title: 'Error Processing transaction',
					icon: 'error',
					text: 'Please try again.'
				})
				navigate ('/shop')
			}
			else {
				Swal.fire({
					title: 'Ordered Successfully',
					icon: 'success',
					text: `Your transaction number is #${getRandom}.`
				})
			}
		})
	}




	return(
			<Container>
	        <Row className="p-5">
	            <Col lg={{ span: 5}}>
	                <div className="p-4">
	                    <Card.Body className="text-center">
	                        <Card.Img className='card-image-view' src={image}/>
	                        <Card.Title><h2>{productName}</h2></Card.Title>
	                        <Card.Text>{description}</Card.Text>
	                        <Card.Subtitle><strong>Product ID</strong></Card.Subtitle>
	                        <Card.Text>{productId}</Card.Text>
	                         <Card.Subtitle><strong>Category</strong></Card.Subtitle>
	                        <Card.Text>{category}</Card.Text>
	                        <Card.Subtitle><strong>Price</strong></Card.Subtitle>
	                        <Card.Text>₱ {price}</Card.Text>
	                    </Card.Body>        
	                </div>
	            </Col>
	            
	            <Col lg={{ span: 5, offset:1}}>
	            <Card className="mt-4 p-3">
	                    <Card.Body className="text-center p-5">
	                        
	                       <h2>ORDER SUMMARY</h2>
	                       <div className="mt-5">
	                       <Card.Title><h6></h6></Card.Title>
	                       <h6 className="mt-3"><strong>Product</strong></h6>
	                        <Card.Text>{productName} | {description}</Card.Text>
	                       <Card.Subtitle  className="mt-4"><strong>Quantity</strong></Card.Subtitle>
	                       </div>
	                       <Row className='d-flex justify-content-center align-items-center'>
	                        <Col md="auto">
			            	<Button className="px-3" variant="none" onClick = {subQuantity}><img className="sub-icon" src={sub}/></Button>
			            	</Col>
			            	<Col md="auto">
			            	<Card.Text>{quantity}</Card.Text>
			            	</Col>
			            	<Col md="auto">
			            	<Button className="px-3" variant="none" onClick = {addQuantity}><img className="add-icon" src={add}/></Button>
			            	</Col>
			            	<h6 className="mt-5"><strong>Total</strong></h6>
	                        <Card.Text>₱ {price*quantity}</Card.Text>
			            	</Row>

	                        <Button className='mt-5 w-100' variant="danger" onClick ={event => order(event, productId)}>Order</Button>
	                     
	                    </Card.Body>        
	                </Card>
	            </Col>
	        </Row>
	    </Container>

		)
}