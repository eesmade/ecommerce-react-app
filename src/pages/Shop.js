import ProductCard from '../components/ProductCard.js';
import {Fragment, useEffect, useState} from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap'



// import bg from '../images/bg.png'
import bg from '../images/bg2.jpg'



export default function Shop(){

// useState
const [products, setProducts] = useState([]);


// useEffect
useEffect(()=>{
		// fetch all products from API-DB
		fetch(`${process.env.REACT_APP_API_URL}/product/active`)
		.then(result => result.json())
		.then(data => {
			// console.log(data)

			//to change value of products
			setProducts(data.map(product =>{
				return ( <ProductCard key = {product._id} productProp = {product}/> )
			}))
		})

	},[])

	return(

		<Fragment>
			<Container className="fluid">
			
			
			{products}
			
			 
			</Container>
		</Fragment>

		)
}