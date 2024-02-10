import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slice/cartSlice'


const ProductCard = ({ image, title, price, id}) => {
  const dispatch = useDispatch()
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
        
        </Card.Body>
        <Button className='bg-dark border-dark' onClick={() => dispatch(addToCart({image, title, price, id}))}>
          Add to Cart
        </Button>
    </Card>
    </Link>
    </>
  )
}

export default ProductCard