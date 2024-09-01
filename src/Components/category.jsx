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
                    justifyContent: 'space-between',
                    boxShadow: '0 0 2px',
                    backgroundColor: '#f8f9f9',
                    padding: '5px',
                    borderRadius: '5px',
                    marginBottom: 2,
                }}
            >
                <Typography component="h5" variant="h5" sx={{ margin: 2 }}>
                    {category.name}
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        sx={{

                            maxWidth: '50px',
                            marginRight: '10px',
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
                            maxWidth: '50px',
                            marginRight: '10px',
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
            </Box>
        </div>
    )
}

export default CategoryComp