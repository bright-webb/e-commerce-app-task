import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import axios from 'axios';
import { ProductsWrapper } from './Products.styled';


const Products = () => {
   const [products, setProducts] = useState([]);
   const [error] = useState(null);
    const [cartText, setCartText] = useState({});
    const [cartItems, setCartItems] = useState([]);
   const apiUrl = process.env.REACT_APP_API_URL;
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

       const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
          setCartItems(storedCartItems);
        }
  }, []);
  
const handleAddToCart = (product) => {
  const { productId, productName, price, description, ...rest } = product;

  if (cartItems.find((item) => item.productId === productId)) {
    setCartText((prev) => ({
      ...prev,
      [productId]: 'Added to Cart',
    }));
    return;
  }

  const updatedCartItems = [...cartItems, { productId, productName, price, description }];
  setCartItems(updatedCartItems);
  setCartText((prev) => ({
    ...prev,
    [productId]: 'Added to Cart',
  }));
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};

const isItemInCart = (productId) => {
  return cartItems.some((item) => item.productId === productId);
};






  if (error) {
    return <div>Error: {error}</div>;
  }
   return (
 <ProductsWrapper data-testid="Products">
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.productId} xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h6" gutterBottom>
              {product.productName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              $ {product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(product)}
              disabled={isItemInCart(product.productId)}
            >
              {cartText[product.productId] === 'Added to Cart' ? 'Proceed to Checkout' : 'Add to Cart'}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
    <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'lightblue', padding: 10, borderRadius: 5 }}>
        Items in Cart: {cartItems.length}
      </div>
 </ProductsWrapper>
 )
};


export default Products;
