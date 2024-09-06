import { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Tooltip } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const ItemComp = ({ product, onAddToCart }) => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () =>{
        const itemToAdd = {
            ...product,
            quantity: count
        };
        onAddToCart(itemToAdd); // ⬅️ Call onAddToCart with the product and quantity
        setCount(0); // Reset count after adding to cart
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card sx={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)', borderRadius: '20px', width: '350px', color: '#191919' }}>
                <CardMedia
                    component="img"
                    height="430px"
                    image={product.linkToPic}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <strong>{product.title}</strong>
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="body2">
                                {product.description}
                            </Typography>
                            <Typography variant="body2">
                                Price: ${product.price}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="body2">
                                In stock: {product.inStock}
                            </Typography>
                            <Typography variant="body2">
                                Bought: {product.bought}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop:'15px'
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
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
                                <RemoveCircleOutlineOutlinedIcon fontSize='large'/>
                            </IconButton>
                            <Typography variant="body1">
                                <strong>{count}</strong>
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
                                <AddCircleOutlineOutlinedIcon fontSize='large'/>
                            </IconButton>
                        </Box>
                        <Box>
                            <Tooltip title="Add To Cart" arrow>
                                <IconButton
                                    onClick={handleAddToCart}
                                    aria-label="AddToCart"
                                    sx={{ 
                                        color:'#18E19D'
                                    }}
                                >
                                    <AddShoppingCartOutlinedIcon fontSize='large' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ItemComp;
