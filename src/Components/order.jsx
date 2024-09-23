import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductsViewComp from './productsView';
import CartComp from './cart';
import { useDispatch, useSelector } from 'react-redux';


const OrderComp = () => {

    console.log("OrderComp randring ")

    const dispatch = useDispatch();
    const location = useLocation();
    //const { currentUser } = location.state || {};
    const { username } = useParams();
    const products = useSelector((state) => state.products);

    const [itemsInCart, setItemsInCart] = useState([]);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleAddNewOrders = (orders) => {
        itemsInCart.forEach((order) => {
            const date = new Date();
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            const totalPrice = order.quantity * order.price;
            const newOrder = {
                date: formattedDate, 
                product: order.title,
                qty: order.quantity,
                totalPrice: totalPrice,
                username: username
            };
            dispatch({ type: 'ADD_NEW_ORDER', payload: newOrder });
            console.log(newOrder);
        })
        setItemsInCart([]);
    }

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
                width: '100%', 
            }}
        >
            {/* Cart on the left */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '25%', 
                }}
            >
                <CartComp items={itemsInCart} onRemoveFromCart={handleRemoveFromCart} isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} handleAddNewOrders={handleAddNewOrders} />
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