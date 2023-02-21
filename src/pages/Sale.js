import ProductCard from '../components/ProductCard.js';
import {Fragment, useEffect, useState} from 'react';



export default function Sale(){

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
      setProducts(data.map(product =>{
        return ( <ProductCard key = {product._id} productProp = {product}/> )
      }))
    })

  },[])

  return(

    <Fragment>
      <h1 className="text-center mt-3"> SALE! SALE! SALE! </h1>
      {products}

    </Fragment>

    )
}