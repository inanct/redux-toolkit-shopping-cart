import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slice/productSlice';
import { Container, Row} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../Components/Product/Card/ProductCard';
import "./product.css"


const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector(state=> state.product.data)

  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  ]
    };

  return (
    <Container className='product'>
     <Row className='mt-5 '>
 <h3>Men's Clothing</h3>
      <Slider {...settings}>
       
       {
        products.filter((product) => product.category === "men's clothing").map((product) => (
          <ProductCard {...product} />
        ))
       }
      </Slider>
     </Row>
     
     <Row className='mt-5'>
 <h3>Women's Clothing</h3>
      <Slider {...settings}>
        
        {
          products.filter((product) => product.category === "women's clothing").map((product)=> (
            <ProductCard {...product}/>
          ))
        }
      </Slider>
     </Row>
      
      <Row className='mt-5'>
        <h3>Jewelery</h3>
<Slider {...settings}>
        {
          products.filter((product)=> product.category === "jewelery").map((product) => (
            <ProductCard {...product}/>
          ))
        } 
      </Slider>
      </Row>
      

      <Row className='mt-5'>
<h3>Electronics</h3>
      <Slider {...settings}>
        {
          products.filter((product)=> product.category === "electronics").map((product) => (
            <ProductCard {...product}/>
          ))
        }
      </Slider>
      </Row>
      
      
    </Container>
  )
}

export default Products