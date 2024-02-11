import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';



const TopNavbar = () => {
  const cartItems = useSelector(state => state.cart.cart)
  return (



    <Navbar bg='dark' expand="lg" variant='dark' sticky="top">
      <Container>
        <Link to="/" className='text-decoration-none fs-2 text-secondary fw-bold'>Shopping Cart</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link'>Home</Link>
            
          
            <Link to="products" className='nav-link'>Products</Link>
            <Link to="contact" className='nav-link'>Contact</Link>
            <Link to="basket">
            <FaShoppingCart className='text-secondary fs-4'/>
            <small className='ms-1 text-danger fs-4 '>{cartItems.length}</small>
            </Link>
             
             
           
          </Nav>
          
        </Navbar.Collapse>
        
        
      </Container>
      
    </Navbar>
 


  )
}

export default TopNavbar