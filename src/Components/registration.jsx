import { useState } from "react";
import {  useSelector } from "react-redux";
import {addDocument, getFormattedDate} from '../firebaseServices'
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";


const RegistrationComp = () => {
  const navigate = useNavigate();

  const [registrationDetails, setRegistrationDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    type: "customer",
    shareOrders: false,
    joinedAt: "",
  });
  const users = useSelector((state) => state.users);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!registrationDetails.username || !registrationDetails.password) {
        alert("Please enter username and password");
    } else {
        const user = users.find(user => user.username === registrationDetails.username);

        if (!user) {
            const newUser = {
                ...registrationDetails,
                joinedAt: getFormattedDate(),
            };
            await addDocument("Users", newUser);
            alert("You registered successfully");
            navigate("/");
        } else {
            alert("The username already exists!");
        }
    }
};

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 0 3px",
          backgroundColor: "#f8f9f9",
          padding: "20px",
          borderRadius: "20px",
          color: "#191919",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ marginTop: 2 }}>
          Registration
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#188de1" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#191919",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD55F",
                },
              },
            }}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                firstName: e.target.value,
              })
            }
          />

          <TextField
            margin="normal"
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#191919",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD55F", // Border color when the field is focused
                },
              },
            }}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                lastName: e.target.value,
              })
            }
          />

          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#191919",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD55F", // Border color when the field is focused
                },
              },
            }}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                username: e.target.value,
              })
            }
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
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#191919",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD55F", // Border color when the field is focused
                },
              },
            }}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                password: e.target.value,
              })
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#18E19D",
                  },
                }}
                onChange={(e) =>
                  setRegistrationDetails({
                    ...registrationDetails,
                    shareOrders: e.target.checked,
                  })
                }
              />
            }
            label="Allow others to see my orders"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#E5BD4C",
              "&:hover": {
                backgroundColor: "#FFD55F",
              },
            }}
          >
            Create
          </Button>
        </Box>
        <Link
          href="./"
          variant="body2"
          color="#191919"
          sx={{ marginBottom: 2 }}
        >
          {"Already have an account? Log In"}
        </Link>
      </Box>
    </Container>
  );
};

export default RegistrationComp;
