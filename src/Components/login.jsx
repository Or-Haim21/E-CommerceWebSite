import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import db from '../firebase';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';



const LoginComp = () => {

    const [loginDetails, setLoginDetails] = useState({});
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.username === loginDetails.username);


        if (user !== undefined) {

            if (user.password === loginDetails.password) {
                if (user.type === 'admin') {
                    navigate('/adminMode');
                }
                else {
                    navigate(`/userMode/${user.username}`);
                }
            }
            else {
                alert('The username or password is incorrect!');
            }
        }
        else {
            alert('The user is not exist');
        }
    }

    return (

        <Container component="main" maxWidth="sm" >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 0 3px',
                    backgroundColor: '#f8f9f9',
                    padding: '20px',
                    borderRadius: '20px',
                    color: '#191919'

                }}
            >

                <Typography component="h1" variant="h6" sx={{ marginTop: 2, }}>
                    Next Generation E-Commerce
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 2,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#188de1' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#191919', 
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD55F', // Border color when the field is focused
                                }
                            },
                        }}

                        onChange={e => setLoginDetails({ ...loginDetails, username: e.target.value })}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#191919', 
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFD55F', // Border color when the field is focused
                                }
                            },
                        }}

                        onChange={e => setLoginDetails({ ...loginDetails, password: e.target.value })}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#E5BD4C',
                            '&:hover': {
                                backgroundColor: '#FFD55F',
                            }
                        }}
                    >
                        Log In
                    </Button>
                </Box>
                <Link href="./registration" variant="body2" color='#191919' sx={{ marginBottom: 2 }}>
                    {"Don't have an account?Sign Up"}
                </Link>
            </Box>
        </Container>
    )
}

export default LoginComp