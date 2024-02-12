import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Map from './Map'

const Contact = () => {
  return (
    <Container className='mt-5'>
      <h2 className='text-center'>Contact</h2>
      <ContactForm />
      <Map/>
    </Container>
    
  )
}

export default Contact