import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductComp from './product';
import { useDispatch,useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const ManageProductsComp = () => {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const addNewProduct = (product) => {
    dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: {id: uuidv4()}
  });
  }

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
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={6} key={product.id} >
                <ProductComp key={product.id} product={product} categories={categories} />
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
          onClick={addNewProduct}
        >
          Add New Product
        </Button>
      </Box>
    </Container>
  );
};

export default ManageProductsComp;
