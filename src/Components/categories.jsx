import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CategoryComp from './category'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const CategoriesComp = () => {

    const categories = ['Toys', 'Clothing', 'Electronic'];

    return (
        <Container component="main" sx={{ width: '700px' }}>
            <Typography component="h4" variant="h4" sx={{ margin: 2 }}>
                Categories
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 0 3px',
                    backgroundColor: '#f8f9f9',
                    padding: '20px',
                    borderRadius: '5px',
                }}
            >
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
                        sx={{ mt: 3, mb: 2, width: '100px' }}
                    >
                        Add
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}

export default CategoriesComp