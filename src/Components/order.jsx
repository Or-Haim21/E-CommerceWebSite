import { Box } from '@mui/material';
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
                width: '100%', // Ensure full width
            }}
        >
            {/* Cart on the left */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '21%', // Reduced width to give more space to ProductsViewComp
                }}
            >
                <CartComp />
            </Box>

            {/* Products view on the right */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, // Ensure ProductsViewComp takes up the remaining space
                }}
            >
                <ProductsViewComp />
            </Box>
        </Box>
    );
}

export default OrderComp;
