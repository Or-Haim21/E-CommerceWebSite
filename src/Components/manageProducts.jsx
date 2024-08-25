import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import ProductComp from './product';
import { useSelector } from 'react-redux';

const ManageProductsComp = () => {

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  return (
    <Container component="main" sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          Radius: 'none',
        }}
      >
        <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
          <strong>Products</strong>
        </Typography>
        {
          products.map((product) => {
            return (
              <ProductComp key={product.id} product={product} categories={categories} />
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