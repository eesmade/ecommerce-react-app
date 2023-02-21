import {useState,useEffect} from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


export default function ProductView(){

// useStates
	const [productName,setProductName] = useState('')
	const [description,setDescription] = useState('')
	const [category, setCategory] = useState('');
	const [price,setPrice] = useState('')
	const [stocks, setStocks] = useState('');
	const navigate = useNavigate()

// useParams
	const {productId} = useParams();

// useEffect
	useEffect(()=>{
		console.log(productId)

		// browser address
		fetch (`${process.env.REACT_APP_API_URL}/product/${productId}`)
		.then(result => result.json())
		.then(data => {
			console.log(data)

			setProductName(data.productName)
			setDescription(data.description)
			setCategory(data.category)
			setPrice(data.price)
			setStocks(data.stocks)

		})

	},[productId])


const order =(id) =>{
		fetch(`${process.env.REACT_APP_API_URL}/order/${productId}`,{
			method: 'POST',
			headers:	{
				'Content-Type' :'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(result => result.json())
		.then(data => {
			console.log(data);
			if(data){
				Swal.fire({
					title: 'Ordered Successfully',
					icon: 'success',
					text: 'Your transation number is #53890446.'
				})
				navigate ('/shop')
			}
			else {
				Swal.fire({
					title: 'Error Processing transaction',
					icon: 'error',
					text: 'Please try again.'
				})
			}
		})
	}




	return(
			<Container className="mt-5">
	        <Row>
	            <Col lg={{ span: 6, offset: 3 }}>
	                <Card>
	                    <Card.Body className="text-center">
	                        <Card.Title>{productName}</Card.Title>
	                        <Card.Text>{description}</Card.Text>
	                         <Card.Subtitle>Category:</Card.Subtitle>
	                        <Card.Text>{category}</Card.Text>
	                        <Card.Subtitle>Price:</Card.Subtitle>
	                        <Card.Text>PhP {price}</Card.Text>
	                        <Card.Subtitle>Stocks</Card.Subtitle>
	                        <Card.Text>{stocks}</Card.Text>
	                        <Button variant="primary" onClick ={()=> order(productId)}>Order</Button>
	                    </Card.Body>        
	                </Card>
	            </Col>
	        </Row>
	    </Container>

		)
}