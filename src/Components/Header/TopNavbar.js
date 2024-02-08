import React from 'react'
import { NavbarBrand} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const TopNavbar = () => {
  return (



    <Navbar bg='dark' expand="lg" variant='dark' >
      <Container>
        <NavbarBrand>Shopping Cart</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link'>Home</Link>
            
          
            <Link to="products" className='nav-link'>Products</Link>
            <Link to="contact" className='nav-link'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 


  )
}

export default TopNavbar