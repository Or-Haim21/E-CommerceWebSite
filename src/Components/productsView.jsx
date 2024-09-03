import React from 'react';
import { Box, Grid } from '@mui/material';
import ItemComp from './item';
import FilterItemsComp from './filterItems';
import { useSelector } from 'react-redux';


const ProductsViewComp = () => {

    const products = useSelector((state) => state.products);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 0 3px',
                backgroundColor: '#f8f9f9',
                borderRadius: '5px',
                paddingBottom:'30px',
                paddingLeft:'10px',
                paddingRight:'10px',

                width: '98%', // Ensure full width
            }}
        >
            <FilterItemsComp />
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={3 } key={product.title} >
                        <ItemComp product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductsViewComp;
