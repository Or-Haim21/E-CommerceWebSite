import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemInCartComp from './itemInCart';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartComp = ({ items, onRemoveFromCart, isContentVisible, setIsContentVisible, handleAddNewOrders }) => {
  const [itemsCart, setItemsCart] = useState([]);

  useEffect(() => {
    setItemsCart(items);

  }, [items]);

  const toggleContentVisibility = () => {
    setIsContentVisible((prevState) => !prevState);
  };


  const handleDeleteItem = (itemToDelete) => {
    const updatedItems = itemsCart.filter(item => item.title !== itemToDelete.title);
    onRemoveFromCart(updatedItems);
    setItemsCart(updatedItems);
    toggleContentVisibility();
  };

  const handleUpdateCart = (product, newQuantity) => {
    const updatedItems = itemsCart.map(item =>
      item.title === product.title ? { ...item, quantity: newQuantity } : item
    );
    setItemsCart(updatedItems);
    onRemoveFromCart(updatedItems);
  };

  const handleOnOrder = () => {
    handleAddNewOrders(itemsCart);
  }

  return (
    <Container component="main" sx={{ width: '450px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '0 0 3px',
          padding: '15px',
          borderRadius: '5px',
          color: '#191919',
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
            <ShoppingCartCheckoutIcon sx={{ color: "#18E19D", marginRight: '10px' }} />
            <Typography component="h5" variant="h5" color='#191919'>
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
                alignItems: 'stretch', // Ensure children stretch to the container width
                marginTop: '20px',
                marginBottom: '20px',
              }}
            >
              {itemsCart.map((item, index) => (
                item.quantity > 0 && <ItemInCartComp key={index} product={item} onDeleteItem={handleDeleteItem} onUpdateCart={handleUpdateCart} />
              ))}
            </Box>
            <Typography component="h5" variant="h6">
              Total: ${itemsCart.reduce((total, item) => total + item.quantity * item.price, 0)}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '5px',
                width: '30%',
                backgroundColor: '#E5BD4C',
                '&:hover': {
                  backgroundColor: '#FFD55F',
                }
              }}
              onClick={handleOnOrder}
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