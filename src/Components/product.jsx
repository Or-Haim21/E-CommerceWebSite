import { Container, Box, TextField, InputLabel, TextareaAutosize, Select, MenuItem, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableComp from './table';

const ProductComp = ({ product, categories }) => {
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    linkToPic: '',
  });

  useEffect(() => {
    setProductData(product);
  }, [product]);

  const usersBuy = {
    data: [[], []],
    headers: ['Name', 'Qty', 'Date'],
    columnsTypes: ['string', 'number', 'string'],
  };

  return (
    <Container component="main" sx={{ maxWidth: '900px', marginBottom: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          boxShadow: '0 0 3px',
          backgroundColor: '#f8f9f9',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
          <InputLabel shrink htmlFor={`title-${product.id}`} sx={{ fontSize: '20px', color: '#191919', paddingBottom: '8px' }}>
            <strong>Title:</strong>
          </InputLabel>
          <TextField
            id={`title-${product.id}`}
            name={`title-${product.id}`}
            value={productData.title || ''}
            onChange={(e) => setProductData({ ...productData, title: e.target.value })}
            fullWidth
          />

          <InputLabel shrink htmlFor={`category-${product.id}`} sx={{ fontSize: '20px', color: '#191919', marginTop: '20px', paddingBottom: '8px' }}>
            <strong>Category:</strong>
          </InputLabel>
          <Select
            id={`category-${product.id}`}
            name={`category-${product.id}`}
            value={productData.category || ''}
            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
            fullWidth
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>

          <InputLabel shrink htmlFor={`description-${product.id}`} sx={{ fontSize: '20px', color: '#191919', marginTop: '20px', paddingBottom: '8px' }}>
            <strong>Description:</strong>
          </InputLabel>
          <TextareaAutosize
            id={`description-${product.id}`}
            name={`description-${product.id}`}
            minRows={5}
            value={productData.description || ''}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            style={{
              width: '100%',
              borderRadius: '6px',
              outlineColor: '#1976D3',
              borderColor: 'lightgrey',
              marginBottom: '20px',
            }}
          />
          <Button
            id={`saveBtn-${product.id}`}
            variant="outlined"
            sx={{
              mt: 2,
              width:'100px',
              borderColor: '#E5BD4C',
              color: '#E5BD4C',
              border: '1px solid',
              '&:hover': {
                borderColor: '#E5BD4C',
                border: '1px solid',
              },
            }}
          >
            Save
          </Button>
        </Box>

        <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column' }}>
          <InputLabel shrink htmlFor={`price-${product.id}`} sx={{ fontSize: '20px', color: '#191919', paddingBottom: '8px' }}>
            <strong>Price:</strong>
          </InputLabel>
          <TextField
            type="number"
            id={`price-${product.id}`}
            name={`price-${product.id}`}
            value={productData.price || ''}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            fullWidth
          />

          <InputLabel shrink htmlFor={`linkToPic-${product.id}`} sx={{ fontSize: '20px', color: '#191919', marginTop: '20px', paddingBottom: '8px' }}>
            <strong>Link to picture:</strong>
          </InputLabel>
          <TextField
            type="text"
            id={`linkToPic-${product.id}`}
            name={`linkToPic-${product.id}`}
            value={productData.linkToPic || ''}
            onChange={(e) => setProductData({ ...productData, linkToPic: e.target.value })}
            fullWidth
          />

          <InputLabel shrink htmlFor={`usersBuy-${product.id}`} sx={{ fontSize: '20px', color: '#191919', marginTop: '20px', paddingBottom: '8px' }}>
            <strong>Bought By:</strong>
          </InputLabel>
          <TableComp
            id={`usersBuy-${product.id}`}
            headers={usersBuy.headers}
            data={usersBuy.data}
            columnsTypes={usersBuy.columnsTypes}
            sx={{ marginTop: '10px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductComp;
