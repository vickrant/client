import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Rwd = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex' xs={12} md={8}>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-1</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-2</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-3</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-4</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-5</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-6</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-7</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-8</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-9</div>
       <div style={{height:'50px',width:'50px',border:'1px solid red'}}>div-10</div>
        
        </Col>
      </Row>

      </Container>
  )
}

export default Rwd;
