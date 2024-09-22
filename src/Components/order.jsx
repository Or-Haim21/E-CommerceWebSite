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

    const [itemsInCart, setItemsInCart] = useState([]);
    const [isContentVisible, setIsContentVisible] = useState(false);


    const handleAddToCart = (product) => {
        const existItem = itemsInCart.find(item => item.title === product.title);
        if (existItem) {
            setItemsInCart(prevItems =>
                prevItems.map(item =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + product.quantity } 
                        : item
                )
            );         
        }
        else {
            setItemsInCart(prevItems => [...prevItems, product]);
        }

        setIsContentVisible(true);
    };
    const handleRemoveFromCart = (items) => {
        setItemsInCart(items)
    }

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
                <CartComp items={itemsInCart} onRemoveFromCart={handleRemoveFromCart} isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} />
            </Box>

            {/* Products view on the right */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, // Ensure ProductsViewComp takes up the remaining space
                }}
            >
                <ProductsViewComp products={products} onAddToCart={handleAddToCart} />
            </Box>
        </Box>
    );
}

export default OrderComp;