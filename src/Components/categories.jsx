import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CategoryComp from './category'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const CategoriesComp = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)
    const [newCategory, setNewCategory] = useState('');

    const addNewCategory = () => {
        if (newCategory.trim() !== '') {
            dispatch({
                type: 'ADD_NEW_CATEGORY',
                payload: {id: uuidv4(), name: newCategory}
            });
            setNewCategory('');
        }
    }
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
                    categories.map((category) => {
                        return (
                            <CategoryComp key={category.id} category={category} />
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
                        value={newCategory}
                        sx={{ width: '400px', marginRight: '16px' }}
                        onChange={e => setNewCategory(e.target.value)}
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
                        onClick={addNewCategory}
                    >
                        Add
                    </Button>
                </Box>
            </Box>

        </Container>
    )
}

export default CategoriesComp