import ProductCard from '../components/ProductCard.js';
import {Fragment, useEffect,useState} from 'react';



export default function Shop(){

// useState
const [products, setProducts] = useState([]);


// useEffect
	useEffect(()=>{
		// fetch all products from API-DB
		fetch(`${process.env.REACT_APP_API_URL}/product/active`)
		.then(result => result.json())
		.then(data => {
			console.log(data)

			//to change value of products
			setProducts(data.map(products =>{
				return ( <ProductCard key = {products._id} productProp = {products}/> )
			}))
		})

	},[])


	return(

		<Fragment>
			<h1 className="text-center mt-3"> Shop </h1>
			{products}
	
		</Fragment>

		)
}