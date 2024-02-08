import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slice/productSlice'; // Örnek olarak kullanılan dosya adınıza göre değiştirin
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

const AllCategories = () => {
  const dispatch = useDispatch();

  // Redux store'dan ürün verilerini al
  const products = useSelector(state => state.product.data);

  useEffect(() => {
    // Bileşen yüklendiğinde ürün verilerini almak için eylemi gönder
    dispatch(fetchProducts());
  }, [dispatch]);

  // Redux store'dan aldığınız ürün verilerinden yalnızca kategori bilgisini filtreleyin
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <Container>
        <h3 className='text-center mb-4'>Browse Categories</h3>
        <Row>
            {categories.map(category => (
              <Col key={category} xs={12} sm={6} md={3} className='mb-2 p-0'>
                <CategoryCard category={category} />
                {/* Kategorileri burada kullanabilirsiniz */}
              </Col>
            ))}
        </Row>
    </Container>
  )
}

export default AllCategories;
