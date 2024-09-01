import { Box, Button, Checkbox, Container, Divider, FormControlLabel, InputLabel, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const MyAccountComp = () => {
    const location = useLocation();
    const { currentUser } = location.state || {};
    const [userData, setUserData] = useState({});
    const users = useSelector((state) => state.users);

    useEffect(() => {
        if (currentUser) {
            // Find the user object
            const user = users.find(user => user.username === currentUser.username);
            console.log(user);
            if (user) {
                // Set the user data
                setUserData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    password: user.password,
                    sharedOrders: user.shareOrders
                });
            }
        }
    }, [users, currentUser]);

    return (
        <Container component="main" maxWidth="xs" >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 0 1px',
                    backgroundColor: '#f8f9f9',
                    padding: '20px',
                    borderRadius: '20px'
                }}
            >

                <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 1 }}>
                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="firstname" style={{ fontSize: '20px' }}>
                            <strong>First Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            value={userData.firstName || ''}
                            inputProps={{ sx: { height: '5px' } }}
                            autoFocus
                            onChange={e => setUserData({...userData, firstName: e.target.value})}
                        />
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="lastname" style={{ fontSize: '20px', }}>
                            <strong>Last Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            id="lastname"
                            name="lastname"
                            value={userData.lastName || ''}
                            onChange={e => setUserData({...userData, lastName: e.target.value})}
                        />
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="username" style={{ fontSize: '20px' }}>
                            <strong>User Name:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            id="username"
                            name="username"
                            value={userData.username || ''}
                            onChange={e => setUserData({...userData, username: e.target.value})}
                        />
                    </Box>

                    <Box paddingBottom={'15px'}>
                        <InputLabel shrink htmlFor="password" style={{ fontSize: '20px' }}>
                            <strong>Password:</strong>
                        </InputLabel>
                        <TextField
                            fullWidth
                            inputProps={{ sx: { height: '5px' } }}
                            name="password"
                            type="password"
                            id="password"
                            value={userData.password || ''}
                            onChange={e => setUserData({...userData, password: e.target.value})}
                        />
                    </Box>

                    <FormControlLabel
                        control={<Checkbox checked={userData.sharedOrders || false} color="primary" />}
                        onChange={e => setUserData({ ...userData, sharedOrders: e.target.checked })}
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