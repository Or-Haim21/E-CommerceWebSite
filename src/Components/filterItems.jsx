import { Box, Button, Container, MenuItem, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const FilterItemsComp = () => {
    const [priceValue, setPriceValue] = useState(50); // Use a single value for the slider

    const handleChange = (event, newValue) => {
        setPriceValue(newValue); // Update the state with the new value
    };

    return (
        <Container component="main" >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#f8f9f9',
                    padding: '30px',
                    borderRadius: '5px',
                    width:'800px',
                }}
            >
                <Typography variant="body2" color="text.secondary" sx={{ marginRight: '5px' }}>
                    <strong>Filter by:</strong>
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '10px',
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ paddingRight: '5px' }}>
                        Category:
                    </Typography>
                    <Select
                        id="category"
                        defaultValue={'All'}
                        sx={{
                            width: '110px',
                            height: '25px',
                        }}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={'Shoes'}>Shoes</MenuItem>
                        <MenuItem value={'T-shirt'}>T-shirt</MenuItem>
                        <MenuItem value={'Jeans'}>Jeans</MenuItem>
                        <MenuItem value={'Tank top'}>Tank top</MenuItem>
                    </Select>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '10px',
                        maxWidth:'250',
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ paddingRight: '12px' }}>
                        Price:
                    </Typography>
                    <Stack spacing={2} direction="row" sx={{ width: '150px' }} alignItems="center">
                        <Slider
                            aria-label="Price"
                            value={priceValue}
                            onChange={handleChange}
                            valueLabelDisplay="auto" // shows the value label on hover
                            min={0} // Define min and max values if needed
                            max={100}
                        />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: '12px', width:'20px' }}>
                        {priceValue}$
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '10px',
                    }}
                >
                    <Typography variant="body2" color="text.secondary" sx={{ paddingRight: '5px' }}>
                        Title:
                    </Typography>
                    <TextField
                        id="title"
                        name="title"
                        inputProps={{ sx: { height: '1px', width:'100px'} }}
                    //onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
                    />
                </Box>
                <Button 
                    variant="contained"
                    sx={{height:'30px', width:'40px', fontSize:'12px'}}
                >
                    Clear
                </Button>
            </Box>
        </Container>
    );
};

export default FilterItemsComp;
