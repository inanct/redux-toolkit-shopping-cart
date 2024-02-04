import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {
  return (
    <Link to={`cayegory/${category}`} className='text-decoration-none text-dark'>
        <Card>
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