import ProductCard from '../components/ProductCard.js';
import {Fragment, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

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
    <Container className="fluid">
      <h1 className="text-center pt-4 pb-2 text-danger"> SALE! SALE! SALE! </h1>
      {products}
      </Container>

    </Fragment>

    )
}