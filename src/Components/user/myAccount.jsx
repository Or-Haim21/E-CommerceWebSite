import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateDoc, collection, doc } from "firebase/firestore";
import db from "../../firebase";
import { useLocation } from "react-router-dom";

const MyAccountComp = () => {
  const location = useLocation();
  let { currentUser } = location.state || {};
  const [userData, setUserData] = useState({});
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (currentUser) {
      const user = users.find((user) => user.id === currentUser.id);
      if (user) {
        setUserData({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          password: user.password,
          shareOrders: user.shareOrders,
        });
      }
    }
  }, [users, currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.username || !userData.password) {
      alert("Please fill all required fields: username and password.");
      return;
    }

    const { id, ...dataToUpdate } = userData; 
    const docRef = doc(db, "Users", id);
    await updateDoc(docRef,dataToUpdate);
    alert("Your details have been saved successfully");
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
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Box paddingBottom={"15px"}>
            <InputLabel shrink htmlFor="firstname" style={{ fontSize: "20px" }}>
              <strong>First Name:</strong>
            </InputLabel>
            <TextField
              fullWidth
              id="firstname"
              name="firstname"
              value={userData.firstName || ""}
              inputProps={{ sx: { height: "5px" } }}
              autoFocus
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFD55F",
                  },
                },
              }}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
          </Box>

          <Box paddingBottom={"15px"}>
            <InputLabel shrink htmlFor="lastname" style={{ fontSize: "20px" }}>
              <strong>Last Name:</strong>
            </InputLabel>
            <TextField
              fullWidth
              inputProps={{ sx: { height: "5px" } }}
              id="lastname"
              name="lastname"
              value={userData.lastName || ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFD55F",
                  },
                },
              }}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </Box>

          <Box paddingBottom={"15px"}>
            <InputLabel shrink htmlFor="username" style={{ fontSize: "20px" }}>
              <strong>User Name:</strong>
            </InputLabel>
            <Tooltip title="Username cannot be changed" placement="top">
              <TextField
                fullWidth
                inputProps={{ sx: { height: "5px" } }}
                id="username"
                name="username"
                value={userData.username || ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFD55F",
                    },
                  },
                }}
                disabled
              />
            </Tooltip>
          </Box>

          <Box paddingBottom={"15px"}>
            <InputLabel shrink htmlFor="password" style={{ fontSize: "20px" }}>
              <strong>Password:</strong>
            </InputLabel>
            <TextField
              fullWidth
              inputProps={{ sx: { height: "5px" } }}
              name="password"
              type="password"
              id="password"
              value={userData.password || ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFD55F",
                  },
                },
              }}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                id="AllowCheckbox"
                checked={userData.shareOrders || false}
                onChange={(e) =>
                  setUserData({ ...userData, shareOrders: e.target.checked })
                }
                sx={{
                  "&.Mui-checked": {
                    color: "#18E19D",
                  },
                }}
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
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MyAccountComp;
