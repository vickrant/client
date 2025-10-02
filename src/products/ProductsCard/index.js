import React from 'react'
import {Card,Button, Badge, CardBody, CardFooter, CardImg, CardTitle, CardHeader} from 'react-bootstrap'; // Adjust the path if Card is located elsewhere
import './style.scss';
import {BagPlusFill} from 'react-bootstrap-icons';
import { Col } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';


const ProductCard = (item) => {
    const {description,image,title,price,rating} = item;
  return (
   
       <Col xl={{span:3}} lg={{span:4}} md={{span:6}} sm={{span:12}}>
        <Card className='mb-2'>
          <CardHeader className='header mb-2'> {title}</CardHeader>
            <CardImg src={image} className='image'/>

            <CardBody className='content'>
                  
                      <section className='product-text'>${price}</section> 
                      <section className='desc'>{description}</section> 

                        <section className='d-flex align-items-end'>
                        <Rating readonly initialValue={rating.rate} allowFraction size={20} />
                        <Badge pill className='ms-2'>{rating.count}</Badge>
                    </section>
                    

            </CardBody>

            <CardFooter >
              <section className='d-flex align align-items-center'>
            <Button variant="outline-primary" className="d-flex align-items-center">
               <BagPlusFill size={25} className='me-2'/>
                  Add To Card
               
             
               </Button>
               </section>
            </CardFooter>         

        </Card>
        </Col>
      
   
  )
}

export default ProductCard
