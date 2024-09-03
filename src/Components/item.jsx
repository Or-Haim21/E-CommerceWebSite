import { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemComp = ({ product }) => {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card sx={{ boxShadow: '10', width: '400px' }}>
                <CardMedia
                    component="img"
                    height="450px"
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
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
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
                            <Typography variant="body2" color="text.secondary">
                                In stock: {product.inStock}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
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
                        <Typography variant="body1" color="text.primary">
                            <strong>{count}</strong>
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
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ItemComp;
