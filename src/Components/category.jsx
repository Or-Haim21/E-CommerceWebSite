import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


const CategoryComp = ({ category }) => {

    const [updateMode, setUpdateMode] = useState(false);
    const [categoryData,setCategoryData] = useState(category);
    const dispatch = useDispatch(); 


    const handleUpdate = () => {
        if(updateMode){
            dispatch({
                type: 'UPDATE_CATEGORY',
                payload: categoryData
            });
        }
        setUpdateMode(!updateMode);
    }

    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_CATEGORY',
            payload: categoryData.id
        });
    }

    return (
        <div>
            <Box
                sx={{
                    width: '500px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 0 2px',
                    backgroundColor: '#f8f9f9',
                    padding: '5px',
                    borderRadius: '5px',
                    marginBottom: 2,
                }}
            >
                {
                    !updateMode && <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
                        {categoryData.name}
                    </Typography>
                }
                {
                    updateMode && <TextField
                        margin="normal"
                        id="updateCategory"
                        name="updateCategory"
                        value={categoryData.name}
                        sx={{  marginRight: 2 }}
                    onChange={e => setCategoryData({...categoryData,name:e.target.value})}
                    />
                }
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            maxWidth: '50px',
                            marginRight: '10px',
                            fontSize: '60%',
                            backgroundColor: '#18E19D',
                            '&:hover': {
                                backgroundColor: 'white',
                                borderColor: '#18E19D',
                                color: '#18E19D'
                            },
                        }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            maxWidth: '50px',
                            marginRight: '10px',
                            fontSize: '60%',
                            borderColor: '#F24949',
                            color: '#F24949',
                            '&:hover': {
                                borderColor: '#F24949',
                                border: '2px solid',
                                fontWeight: 'bold',
                            },
                        }}
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default CategoryComp