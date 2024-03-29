import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CategoryCard.css"
const CategoryCard = ({category}) => {
  return (
    <Link className='text-decoration-none text-dark'>
        <Card className='custom-card'>
            <Card.Body>
                <Card.Text className='text-capitalize'>
                    {category}
                </Card.Text>
                
            </Card.Body>
        </Card>
    
    </Link>
  )
}

export default CategoryCard