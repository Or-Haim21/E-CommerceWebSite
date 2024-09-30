import { Box } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addDocument, updateDocument, getFormattedDate } from '../../firebaseServices'
import ProductsViewComp from './productsView';
import CartComp from './cart';
import { useSelector } from 'react-redux';


const OrderComp = () => {

    const { username } = useParams();
    const products = useSelector((state) => state.products);

    const [itemsInCart, setItemsInCart] = useState([]);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleAddNewOrders = async (orders) => {
        itemsInCart.forEach(async (order) => {
            const formattedDate = getFormattedDate();
            const totalPrice = order.quantity * order.price;
            const newOrder = {
                date: formattedDate,
                product: order.title,
                qty: order.quantity,
                totalPrice: totalPrice,
                username: username,
            };
    
            let product = products.find(product => product.title === order.title);
            product.inStock -= order.quantity;
    
            await updateDocument("Products", product.id, product);
            await addDocument("Orders", newOrder);
        });
        setItemsInCart([]);
    };

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
                justifyContent: 'center', 
                alignItems: 'flex-start',
                maxWidth:'95%', 
            }}
        >
            {/* Cart on the left */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    wmaxWidth: '20%', 
                    marginTop:'120px',
                }}
            >
                <CartComp items={itemsInCart} onRemoveFromCart={handleRemoveFromCart} isContentVisible={isContentVisible} setIsContentVisible={setIsContentVisible} handleAddNewOrders={handleAddNewOrders} />
            </Box>

            {/* Products view on the right */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth:'70%',
                }}
            >
                <ProductsViewComp products={products} onAddToCart={handleAddToCart} />
            </Box>
        </Box>
    );
}

export default OrderComp;