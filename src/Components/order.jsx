import { Box } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsViewComp from './productsView';
import CartComp from './cart';
import { useSelector } from 'react-redux';


const OrderComp = () => {
    const location = useLocation();
    const products = useSelector((state) => state.products);
    const { currentUser } = location.state || {};

    const [itemsInCart,setItemsInCart] = useState([]);
    const handleAddToCart = (product) => {
        setItemsInCart(prevItems => [...prevItems, product]);
    };

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
                    width: '25%', // Reduced width to give more space to ProductsViewComp
                }}
            >
                <CartComp items={itemsInCart}/>
            </Box>

            {/* Products view on the right */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, // Ensure ProductsViewComp takes up the remaining space
                }}
            >
                <ProductsViewComp products={products} onAddToCart={handleAddToCart}/>
            </Box>
        </Box>
    );
}

export default OrderComp;
