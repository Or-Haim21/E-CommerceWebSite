import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
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
        }}
      >
        <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
          <strong>Products</strong>
        </Typography>

        <Box>
          <Grid container  sx={{ width: '100%' }}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={6} key={product.title} >
                <ProductComp key={index} product={product} categories={categories} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            backgroundColor: '#E5BD4C',
            '&:hover': {
              backgroundColor: '#FFD55F',
            },
          }}
        >
          Add New Product
        </Button>
      </Box>
    </Container>
  );
};

export default ManageProductsComp;
