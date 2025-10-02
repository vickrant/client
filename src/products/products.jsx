import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductsCard';
import {Container, Row } from 'react-bootstrap';

const Products = () => {


 const url ="https://fakestoreapi.com/products";
 const [products, setData] = useState([]);

 useEffect(()=>{
    (async()=>
    {

  
    const records = await axios.get(url);
    console.log('records',records.data)
    setData(records.data)
    })();
    
 },[])


  return (
 
    <Container fluid>
      <Row>
  
    {products.map((product)=> <ProductCard   key={product.id} {...product}/>)}
  </Row>
      
    </Container>
    
  )
  
}

export default Products
