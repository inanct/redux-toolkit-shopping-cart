import React from 'react'
import { Button, Card,    Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removefromCart } from '../redux/slice/cartSlice'


const Basket = () => {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
  return (
    <Container>
        <h2 className='text-center'>My Cart</h2>
        <Row style={{ height: '43rem' }} className='d-flex    border border-dark shadow-lg p-3 mb-5 bg-body rounded mt-5'>
{
            cartitems.map(item => {
             
              
              
              
              
                return (
                    <Card style={{ width: '18rem', height:"300px" }}>
                        <Card.Img src={item.image} alt="" />
                        <Card.Body>
                          <Card.Text>${item.price}</Card.Text>
                          <Button onClick={() => dispatch(removefromCart({id: item.id}))}>Remove</Button>
                        </Card.Body>
                        
                    </Card>
                )
            })
        }
        </Row>
        
        
    </Container>
  )
}

export default Basket