import ProductCard from '../components/ProductCard.js';
import {Fragment, useEffect, useState} from 'react';

import sale from '../images/salesale.jpg'

export default function Sale(){

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
    <div style={{ backgroundImage:`url(${sale})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <h1 className="text-center pt-5"> SALE! SALE! SALE! </h1>
      {products}
      </div>

    </Fragment>

    )
}