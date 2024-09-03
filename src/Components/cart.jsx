import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ItemInCartComp from './itemInCart';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartComp = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible((prevState) => !prevState);
  };

  const items = [
    { title: 'T-Shirt', quantity: 3, price: 10 },
    { title: 'Jeans', quantity: 2, price: 15 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 },
    { title: 'Shoes', quantity: 1, price: 60 }

  ];

  return (
    <Container component="main" sx={{ width: '400px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '0 0 3px',
          backgroundColor: '#f8f9f9',
          padding: '15px',
          borderRadius: '5px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ShoppingCartCheckoutIcon sx={{ marginRight: '10px' }} />
            <Typography component="h5" variant="h5">
              Cart
            </Typography>
          </Box>
          <IconButton onClick={toggleContentVisibility}>
            {isContentVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>

        {/* Conditionally render the cart contents */}
        {isContentVisible && (
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: '20px',
                marginBottom: '20px',
              }}
            >
              {items.map((item, index) => (
                item.quantity > 0 && <ItemInCartComp key={index} product={item} />
              ))}
            </Box>
            <Typography component="h5" variant="h6">
              Total: ${items.reduce((total, item) => total + item.quantity * item.price, 0)}
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: '5px' }}
            >
              Order
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default CartComp;
