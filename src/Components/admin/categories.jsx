import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase";
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
    const [name, setName] = useState('');

    const addNewCategory = async () => {
        if (name.trim() !== '') {
            const newCategory = { 
                name: name,
            }
            await addDoc(collection(db, "Categories"),newCategory)
            setName('');
        }
    }
    return (
        <Container component="main" sx={{ minWidth: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    border: 'none',
                    width:'100%'
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
                        justifyContent: 'center',
                        width:'20%'
                    }}
                >
                    <TextField
                        margin="normal"
                        id="newCategory"
                        label="Add new category"
                        name="newCategory"
                        autoComplete="newCategory"
                        value={name}
                        sx={{ minWidth: '100%', marginRight: '16px' }}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            width: '100%',
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