
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './Card/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/productSlice';




const LatestProducts = () => {
const dispatch = useDispatch();

  // Redux store'dan ürün verilerini al
  const products = useSelector(state => state.product.data);

  useEffect(() => {
    // Bileşen yüklendiğinde ürün verilerini almak için eylemi gönder
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Container>
        <h3 className='text-center mb-4'>Latest Product</h3>
        <Row>
        {/* API'den alınan her ürün için bir Col bileşeni oluştur */}
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={2} className='mb-4'>
<ProductCard {...product} />


          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default LatestProducts