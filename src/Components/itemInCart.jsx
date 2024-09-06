import { Box, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useState } from 'react';

const ItemInCartComp = ({ product, onDeleteItem}) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const [totalPrice, setTotalPrice] = useState(product.quantity * product.price);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + product.price);
    };

    const handleRemove = () => {
        if (quantity > 0 && totalPrice > 0) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - product.price);
        }
    };

    const handleDeleteItem = () =>{
        onDeleteItem(product); 
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#e5e7e9',
                borderRadius: '10px',
                paddingLeft: '5px',
                marginBottom: '5px',
                width: '100%',
                color: '#191919', 
            }}
        >
            <Typography variant="body1">
                {product.title}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
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
                <Typography variant="body1" sx={{ marginRight: '5px' }}>
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
                <Typography variant="body1" sx={{ marginRight: '5px' }}>
                    units -
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1">    
                    Total: ${totalPrice}
                </Typography>
            </Box>
            <IconButton
                aria-label="delete"
                onClick={handleDeleteItem}
                sx={{
                    color: '#F24949',
                }}
            >
                <DeleteForeverOutlinedIcon fontSize='small'/>
            </IconButton>
        </Box>
    );
};

export default ItemInCartComp;
