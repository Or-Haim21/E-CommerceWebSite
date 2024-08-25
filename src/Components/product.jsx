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
    <div>
      <Container component="main" sx={{ width: '850px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            margin: 'normal',
            boxShadow: '0 0 3px',
            backgroundColor: '#f8f9f9',
            padding: '30px',
            marginLeft: '50px',
            marginRight: '50px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingLeft: '20px',
            }}
          >
            <Box
              sx={{
                paddingBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <InputLabel shrink htmlFor={`title-${product.id}`} style={{ fontSize: '20px' }}>
                <strong>Title:</strong>
              </InputLabel>
              <TextField
                id={`title-${product.id}`} 
                name={`title-${product.id}`}
                value={productData.title || ''}
                onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                inputProps={{ sx: { height: '5px' } }}
              />
            </Box>

            <Box
              sx={{
                paddingBottom: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <InputLabel shrink htmlFor={`category-${product.id}`} style={{ fontSize: '20px' }}>
                <strong>Category:</strong>
              </InputLabel>
              <Select
                id={`category-${product.id}`} 
                name={`category-${product.id}`}
                value={productData.category || ''}
                onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                sx={{ width: '200px', height: '40px' }}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Box
              sx={{
                paddingBottom: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <InputLabel shrink htmlFor={`description-${product.id}`} style={{ fontSize: '20px' }}>
                <strong>Description:</strong>
              </InputLabel>
              <TextareaAutosize
                id={`description-${product.id}`} 
                name={`description-${product.id}`}
                minRows={10}
                value={productData.description || ''}
                onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                style={{
                  width: '300px',
                  borderRadius: '6px',
                  outlineColor: '#1976D3',
                  borderColor: 'lightgrey',
                  marginBottom: '20px',
                }}
              />
              <Button id={`saveBtn-${product.id}`} variant="contained" sx={{ mt: 2 }}>
                Save
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              paddingBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingRight: '20px',
            }}
          >
            <Box sx={{ paddingBottom: '15px' }}>
              <InputLabel shrink htmlFor={`price-${product.id}`} sx={{ fontSize: '20px' }}>
                <strong>Price:</strong>
              </InputLabel>
              <TextField
                type="number"
                id={`price-${product.id}`} 
                name={`price-${product.id}`}
                value={productData.price || ''}
                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                inputProps={{ sx: { height: '3px' } }}
              />
            </Box>

            <Box sx={{ paddingBottom: '15px' }}>
              <InputLabel shrink htmlFor={`linkToPic-${product.id}`} sx={{ fontSize: '20px' }}>
                <strong>Link to picture:</strong>
              </InputLabel>
              <TextField
                type="text"
                id={`linkToPic-${product.id}`} 
                name={`linkToPic-${product.id}`}
                value={productData.linkToPic || ''}
                onChange={(e) => setProductData({ ...productData, linkToPic: e.target.value })}
                inputProps={{ sx: { height: '3px' } }}
              />
            </Box>

            <Box>
              <InputLabel shrink htmlFor={`usersBuy-${product.id}`} sx={{ fontSize: '20px' }}>
                <strong>Bought By:</strong>
              </InputLabel>
              <TableComp headers={usersBuy.headers} data={usersBuy.data} columnsTypes={usersBuy.columnsTypes} />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProductComp;
