import { Box, Button, Checkbox, Container, Divider, FormControlLabel, InputLabel, TextField } from '@mui/material'
import React from 'react'

const MyAccountComp = () => {
  return (
        <Container component="main" maxWidth="xs" >
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow:'0 0 1px',
                backgroundColor:'#f8f9f9',
                padding:'20px', 
                borderRadius:'20px'
            }}
            >
                
                <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 1 }}>
                    <Box paddingBottom={'15px'}> 
                        <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                            <strong>Firs Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            inputProps={{ sx: { height: '5px' } }}
                            autoFocus

                        />
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="title" style={{ fontSize: '20px',}}>
                            <strong>Last Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            id="lastname"
                            name="lastname"

                        />  
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                            <strong>User Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            id="username"
                            name="username"

                        />
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="title" style={{ fontSize: '20px' }}>
                            <strong>Password:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            name="password"
                            type="password"
                            id="password"
                        />
                    </Box>
                    
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Allow others to see my orders"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                         Save
                    </Button>
                </Box>
            </Box>
        </Container>
  )
}

export default MyAccountComp