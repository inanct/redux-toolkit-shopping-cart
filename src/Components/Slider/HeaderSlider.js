import React from 'react'
import { Button, Carousel, CarouselCaption, CarouselItem, Container } from 'react-bootstrap'

const HeaderSlider = () => {
  return (
    <div >
        <Container >
<Carousel variant='dark' style={{maxHeight:"650px"}}>
            <CarouselItem style={{maxHeight:"75vh"}}>
                <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className='d-block w-100'
                style={{height: "100wh", objectFit:"cover"}}
                />
            
            <CarouselCaption className='bg-white '>
                <h5>Shop Now</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='mb-3'>
                    <Button variant='dark'>Click</Button>
                </div>
            </CarouselCaption>
            </CarouselItem>

            <CarouselItem style={{maxHeight:"75vh"}}>
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className='d-block w-100'
                style={{height: "100wh", objectFit:"cover"}}
                />
            
            <CarouselCaption className='bg-white '>
                <h5>Shop Now</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='mb-3'>
                    <Button variant='dark'>Click</Button>
                </div>
            </CarouselCaption>
            </CarouselItem>

            <CarouselItem  style={{maxHeight:"75vh"}}>
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className='d-block w-100'
                style={{height: "100wh", objectFit:"cover"}}
                />
            
            <CarouselCaption className='bg-white '>
                <h5>Shop Now</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='mb-3'>
                    <Button variant='dark'>Click</Button>
                </div>
            </CarouselCaption>
            </CarouselItem>
        </Carousel>
        </Container>
        <button>Add</button>
        
    </div>
  )
}

export default HeaderSlider