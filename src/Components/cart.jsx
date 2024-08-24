import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ItemInCartComp from './itemInCart';

const CartComp = () => {

  const items = [{ title: 'T-Shirt', quantity: 3, price: 10 }, { title: 'Jeans', quantity: 2, price: 15 }, { title: 'Shoes', quantity: 1, price: 60 }];

  return (
    <Container component="main" sx={{ width: '500px' }}>
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
        <Typography component="h5" variant="h4" >
          Cart
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop:'20px',
            marginBottom:'20px',
          }}
        >
          {
            items.map((item, index) => {
              return (
                item.quantity > 0 && <ItemInCartComp key={index} product={item} />
              )
            })
          }
        </Box>
        <Typography component="h5" variant="h6" >
          Total: $
        </Typography>
        <Button
          variant="contained"
          sx={{marginTop:'5px'}}
        >
          Order
        </Button>
      </Box>
    </Container>
  )
}

export default CartComp