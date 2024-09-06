import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CategoryComp from './category'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';

const CategoriesComp = () => {

    //const categories = ['Toys', 'Clothing', 'Electronic'];
    const categories = useSelector((state) => state.categories)

    return (
        <Container component="main" sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    border: 'none',
                }}
            >
                <Typography component="h4" variant="h4" sx={{ marginBottom: 4 }}>
                    <strong>Categories</strong>
                </Typography>
                {
                    categories.map((category, index) => {
                        return (
                            <CategoryComp key={index} category={category} />
                        )
                    })
                }

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextField
                        margin="normal"
                        id="newCategory"
                        label="Add new category"
                        name="newCategory"
                        autoComplete="newCategory"
                        sx={{ width: '400px', marginRight: '16px' }}
                    //onChange={}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            width: '100px',
                            backgroundColor: '#E5BD4C',
                            '&:hover': {
                                backgroundColor: '#FFD55F',
                            }
                        }}
                    >
                        Add
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}

export default CategoriesComp