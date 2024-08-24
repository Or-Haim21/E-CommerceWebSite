import { Box, Drawer } from '@mui/material';
import React from 'react';
import ProductsViewComp from './productsView';
import CartComp from './cart';

const OrderComp = () => {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100vh', // Ensures the height of the box fills the viewport height
                gap: 1, // Reduces the space between the components
            }}
        >
            {/* Cart on the left */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '33%', // Restrict Cart to one-third width
                }}
            >
                <CartComp />
            </Box>

            {/* Products view on the right */}
            <Box
                sx={{
                    flexGrow: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                    <ProductsViewComp />
            </Box>
        </Box>
    );
}

export default OrderComp;
