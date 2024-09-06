import { Box, Button, Container, MenuItem, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const FilterItemsComp = () => {
    const [priceValue, setPriceValue] = useState(); 
    const categories = useSelector((state) => state.categories)


    const handleChange = (event, newValue) => {
        setPriceValue(newValue); // Update the state with the new value
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center', // Center the content
                    backgroundColor: '#EAEAEA',
                    padding: '30px',
                    borderRadius: '5px',
                    width: '100%', // Set to 100% to match the parent width
                    maxWidth: '800px', // Maximum width to ensure it doesn’t stretch too much
                }}
            >
                <Typography variant="body2" color="text.secondary" sx={{ paddingRight: '5px' }}>
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
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'pink', // Border color when focused
                                },
                            },
                            width: '110px',
                            height: '25px',
                        }}
                    >
                        {/* Defualt value*/}
                        <MenuItem value={'All'}>All</MenuItem>
                        {
                            categories.map(category => {
                                return <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                            })
                        }
                    </Select>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '10px',
                        maxWidth: '250',
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
                            valueLabelDisplay="auto" 
                            min={0} 
                            max={100}
                            sx={{
                                color: '#188de1', 
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#188de1', 
                                    border: '2px solid #188de1', 
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#188de1', 
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#188de1', 
                                },
                            }}
                        />
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: '12px', width: '20px' }}>
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
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD55F', // Border color when the field is focused
                                }
                            },
                        }}
                        inputProps={{ sx: { height: '1px', width: '100px' } }}
                    //onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
                    />
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        height: '30px',
                        width: '40px',
                        fontSize: '12px',
                        backgroundColor: '#E5BD4C',
                        '&:hover': {
                            backgroundColor: '#FFD55F',
                        }
                    }}
                >
                    Clear
                </Button>
            </Box>
        </Container>
    );
};

export default FilterItemsComp;
