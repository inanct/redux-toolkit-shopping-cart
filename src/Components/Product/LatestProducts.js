import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './Card/ProductCard'

const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
const LatestProducts = () => {
  return (
    <Container>
        <h3 className='text-center mb-4'>Latest Product</h3>
        <Row>
            <Col xs={12} sm={6} md={4} lg={2} className='mb-4'>
            <ProductCard product={product}/>
            </Col>
        </Row>
    </Container>
  )
}

export default LatestProducts