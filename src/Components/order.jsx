import { Box, Drawer } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductsViewComp from './productsView';
import CartComp from './cart';

const OrderComp = () => {

    const location = useLocation();
    const { currentUser } = location.state || {};

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100vh', 
                gap: 1, 
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
