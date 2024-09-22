import { Box, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useEffect, useState } from 'react';

const ItemInCartComp = ({ product, onDeleteItem, onUpdateCart }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const [totalPrice, setTotalPrice] = useState(product.quantity * product.price);

    useEffect(() => {
        setQuantity(product.quantity);
        setTotalPrice(product.quantity * product.price);

    }, [product]);

    const handleAdd = () => {
        const newQuantity = quantity + 1; 
        setQuantity(newQuantity); 
        setTotalPrice(newQuantity * product.price); 
        onUpdateCart(product, newQuantity);
    };

    const handleRemove = () => {
        if (quantity > 1) { 
            const newQuantity = quantity - 1; 
            setQuantity(newQuantity);
            setTotalPrice(newQuantity * product.price);
            onUpdateCart(product, newQuantity); 
        }
    };

    const handleDeleteItem = () => {
        onDeleteItem(product);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#e5e7e9',
                borderRadius: '10px',
                padding: '10px',
                marginBottom: '10px',
                width: '100%',
                color: '#191919',
                boxSizing: 'border-box', // Ensure padding and border are included in the width
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    flexGrow: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginRight: '10px',
                }}
            >
                {product.title}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: '10px',
                }}
            >
                <IconButton
                    aria-label="remove"
                    onClick={handleRemove}
                    sx={{
                        color: '#18E19D',
                        '&:hover': {
                            color: '#9e9e9e',
                        },
                    }}
                >
                    <RemoveCircleIcon />
                </IconButton>
                <Typography variant="body1" sx={{ marginX: '5px' }}>
                    {quantity}
                </Typography>
                <IconButton
                    aria-label="add"
                    onClick={handleAdd}
                    sx={{
                        color: '#18E19D',
                        '&:hover': {
                            color: '#9e9e9e',
                        },
                    }}
                >
                    <AddCircleIcon />
                </IconButton>
            </Box>

            <Typography
                variant="body1"
                sx={{
                    marginRight: '10px',
                    fontSize: '13px'  // Change the font size here
                }}
            >
                Total: ${totalPrice}
            </Typography>

            <IconButton
                aria-label="delete"
                onClick={handleDeleteItem}
                sx={{
                    color: '#F24949',
                }}
            >
                <DeleteForeverOutlinedIcon fontSize='small' />
            </IconButton>
        </Box>
    );
};

export default ItemInCartComp;
