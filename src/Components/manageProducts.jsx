import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ProductComp from './product';

const ManageProductsComp = () => {

  const products = [{id:'PC', title:'PC'}, {id:'Toy', title:'Toy'}, {id:'TShirt',title:'T shirt'}];

  return (
    <Container component="main" sx={{ width: '1500px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 0 3px',
          backgroundColor: '#f8f9f9',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <Typography component="h4" variant="h4" sx={{ margin: 2 }}>
          Products
        </Typography>
        {
          products.map((product) => {
            return (
              <ProductComp key={product.id} title={product.title} idSuffix={product.id} />
            )
          })
        }

        <Button
          variant="contained"
        >
          Add New
        </Button>
        </Box>
    </Container>
  )
}

export default ManageProductsComp