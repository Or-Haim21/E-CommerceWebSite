import { Box, Container, IconButton, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react'

const ItemInCartComp = ({ product }) => { //product {title,quantity, price}

    const [quantity, setQuantity] = useState(product.quantity)
    const [totalPrice, setTotalPrice] = useState(product.quantity * product.price)

    const handleAdd = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + product.price);
    }

    const handleRemove = () => {
        if (quantity > 0 && totalPrice > 0) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - product.price);
        }
    }

    return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#e5e7e9',
                    borderRadius: '15px',
                    paddingLeft: '12px',
                    marginBottom:'5px',
                    width:'100%',
                }}
            >
                <Typography variant="body1" color="text.secondary" sx={{   }}>
                    {product.title}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <IconButton
                        aria-label="remove"
                        onClick={handleRemove}
                        sx={{
                            color: 'primary.main',
                            '&:hover': {
                                color: '#9e9e9e',
                            },
                        }}
                    >
                        <RemoveCircleIcon />
                    </IconButton>
                    <Typography variant="body1" color="text.secondary" sx={{ marginRight: '5px' }}>
                        {quantity}
                    </Typography>
                    <IconButton
                        aria-label="add"
                        onClick={handleAdd}
                        sx={{
                            color: 'primary.main',
                            '&:hover': {
                                color: '#9e9e9e',
                            },
                        }}
                    >
                        <AddCircleIcon />
                    </IconButton>
                    <Typography variant="body1" color="text.secondary" sx={{ marginRight: '5px' }}>
                        units -
                    </Typography>

                </Box>
                <Box>
                    <Typography variant="body1" color="text.secondary">
                        Total: ${totalPrice}
                    </Typography>
                </Box>
                <IconButton
                        aria-label="delete"
                        //onClick={handleRemove}
                        sx={{
                            color: '#e74c3c',
                        }}
                    >
                        <DeleteForeverIcon />
                    </IconButton>

            </Box>


    )
}

export default ItemInCartComp