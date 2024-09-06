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
                            fontSize: '60%',
                            backgroundColor: '#18E19D',
                            '&:hover': {
                                backgroundColor: 'white',
                                borderColor: '#18E19D',
                                color: '#18E19D'
                            },
                        }}
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
                    >
                        Remove
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default CategoryComp