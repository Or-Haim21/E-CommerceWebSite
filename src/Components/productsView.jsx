import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ItemComp from './item';
import FilterItemsComp from './filterItems';

const ProductsViewComp = ({ products, onAddToCart }) => {
    const [filterCriteria, setFilterCriteria] = useState({
        category: 'All',
        price: 100,
        title: ''
    });

    const handleFilterChange = (newCriteria) => {
        setFilterCriteria(prev => ({ ...prev, ...newCriteria }));
    };

    const filteredProducts = products.filter(product => {
        return (
            (filterCriteria.category === 'All' || product.category === filterCriteria.category) &&
            (product.price <= filterCriteria.price) &&
            (product.title.toLowerCase().includes(filterCriteria.title.toLowerCase()))
        );
    });

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 0 3px',
                borderRadius: '5px',
                paddingBottom: '30px',
                paddingLeft: '10px',
                paddingRight: '10px',
                width: '98%',
                height: '98%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FilterItemsComp filterCriteria={filterCriteria} onFilterChange={handleFilterChange} />
            </Box>
            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.title}>
                        <ItemComp product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductsViewComp;
