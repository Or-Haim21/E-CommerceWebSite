import React from 'react';
import { Box, Button, Container, MenuItem, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const FilterItemsComp = ({ filterCriteria, onFilterChange }) => {
    const categories = useSelector((state) => state.categories);

    const handleCategoryChange = (event) => {
        onFilterChange({ category: event.target.value });
    };

    const handlePriceChange = (event, newValue) => {
        onFilterChange({ price: newValue });
    };

    const handleTitleChange = (event) => {
        onFilterChange({ title: event.target.value });
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#EAEAEA',
                    padding: '30px',
                    borderRadius: '5px',
                    width: '100%',
                    maxWidth: '800px',
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
                        value={filterCriteria.category}
                        onChange={handleCategoryChange}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'pink',
                                },
                            },
                            width: '110px',
                            height: '25px',
                        }}
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        {categories.map(category => (
                            <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                        ))}
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
                            value={filterCriteria.price}
                            onChange={handlePriceChange}
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
                        {filterCriteria.price}$
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
                        value={filterCriteria.title}
                        onChange={handleTitleChange}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD55F',
                                }
                            },
                        }}
                        inputProps={{ sx: { height: '1px', width: '100px' } }}
                    />
                </Box>
                <Button
                    onClick={() => onFilterChange({ category: 'All', price: 100, title: '' })}
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
