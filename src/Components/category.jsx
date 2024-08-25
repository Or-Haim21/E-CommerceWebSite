import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const CategoryComp = ({ category }) => {

    return (
        <div>
            <Box
                sx={{
                    width: '500px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    boxShadow: '0 0 2px',
                    backgroundColor: '#f8f9f9',
                    padding: '5px',
                    borderRadius: '5px',
                    marginBottom: 1,
                }}
            >
                <Typography component="h1" variant="h6" sx={{ margin: 2 }}>
                    {category.name}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mr: 1,
                        mt: 2,
                        mb: 2,
                        maxWidth: '50px',
                        backgroundColor: '#d5dbdb',
                        color: 'black',
                        fontSize: '60%',
                        '&:hover': {
                            backgroundColor: '#a9a9a9',
                            color: 'white',
                        },
                    }}
                >
                    Update
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        mb: 2,
                        maxWidth: '50px',
                        backgroundColor: '#d5dbdb',
                        color: 'black',
                        fontSize: '60%',
                        '&:hover': {
                            backgroundColor: '#a9a9a9',
                            color: 'white',
                        },
                    }}
                >
                    Remove
                </Button>
            </Box>
        </div>
    )
}

export default CategoryComp