import {useState} from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link'


const RegistrationComp = () => {

    const [registrationDetails,setRegistrationDetails] = useState({});

  return (
        <Container component="main" maxWidth="sm" >
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow:'0 0 3px',
                backgroundColor:'#f8f9f9',
                padding:'10px', 
                borderRadius:'20px'
            }}
            >
                
                <Typography component="h1" variant="h4" sx={{ marginTop:2}}>
                   Registration 
                </Typography>
                <Box
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 2,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#1976D3'}}>
                    <LockOutlinedIcon />
                    </Avatar>
                </Box>
                
                <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="firstname"
                        label="First Name"
                        name="firstname"
                        autoComplete="firstname"
                        autoFocus

                        onChange={e=>setRegistrationDetails({...registrationDetails, firstname: e.target.value})}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        name="lastname"
                        autoComplete="lastname"

                        onChange={e=>setRegistrationDetails({...registrationDetails, lastname: e.target.value})}
                    />  

                    <TextField
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"

                        onChange={e=>setRegistrationDetails({...registrationDetails, username: e.target.value})}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"

                        onChange={e=>setRegistrationDetails({...registrationDetails, password: e.target.value})}
                    />
                    
                    <FormControlLabel
                        control={<Checkbox color="primary" onChange={e=>setRegistrationDetails({...registrationDetails, allowShare: e.target.checked})}/>}
                        label="Allow others to see my orders"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                         Create
                    </Button>
                </Box>
                <Link href="#" variant="body2" sx={{marginBottom:2}}>
                  {"Already have an account? Log In"}
                </Link>
            </Box>
        </Container>
  )
}

export default RegistrationComp