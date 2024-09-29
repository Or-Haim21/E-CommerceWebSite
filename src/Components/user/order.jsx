import { Box } from '@mui/material';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { updateDoc, addDoc, collection, doc } from "firebase/firestore";
import db from "../../firebase";
import ProductsViewComp from './productsView';
import CartComp from './cart';
import { useDispatch, useSelector } from 'react-redux';


const OrderComp = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    //const { currentUser } = location.state || {};
    const { username } = useParams();
    const products = useSelector((state) => state.products);

    const [itemsInCart, setItemsInCart] = useState([]);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleAddNewOrders = async (orders) => {
        itemsInCart.forEach(async (order) => {
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
            
            let product = products.find(product => product.title === order.title);
            product.inStock-=order.quantity;

            const { id:prodId, ...prodToUpdate } = product; 
            const prodDocRef = doc(db, "Products", prodId);
            await updateDoc(prodDocRef,prodToUpdate);

           await addDoc(collection(db, "Orders"),newOrder)  

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