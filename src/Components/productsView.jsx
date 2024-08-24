import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import ItemComp from './item';
import FilterItemsComp from './filterItems';


const ProductsViewComp = () => {

    const products = [
        {title: 'T-Shirt', img: '/T-shirt.png', description: 'A nice T-Shirt', price: 10, inStock: 45,bought:1},
        {title: 'Jeans', img: '/Jeans.png', description: 'A shorts Jeans', price: 15, inStock: 32,bought:0},
        {title: 'Tank top', img: '/Tank-top.png', description: 'A sport tank top', price: 8, inStock: 40,bought:3},
        {title: 'Shoes', img: '/Shoes.png', description: 'A running shoes', price: 60, inStock: 7,bought:7},
    ];

    return (
        <Container component="main" sx={{ width: '1000px'}}>
            <Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 0 3px',
                    backgroundColor: '#f8f9f9',
                    padding:'30px',
                    borderRadius: '5px',
                }}
            >
                <FilterItemsComp/>

                <Grid container spacing={2} sx={{ width: '660px'}}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={6} key={product.title} sx={{ px: 0.2 }}>
                            <ItemComp product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default ProductsViewComp