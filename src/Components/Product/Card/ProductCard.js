import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const ProductCard = ({ image, title, price, id }) => {
  return (
    <>
    <Link  className='text-dark text-decoration-none'>
    <Card className='custom-card'>
        <Card.Img variant='top' className='py-3 card-img' src={image}/>
        <Card.Body className='text-center'>
            <Card.Title className='fs-6'>{title}</Card.Title>
            <Card.Text className='text-capitalize text-decoration-none fs-6'>
             ${price}
            </Card.Text>
            <Card.Text className='text-capitalize text-decoration-none fs-6'>
              Serial Number:{id}
            </Card.Text>
        </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default ProductCard