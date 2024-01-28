import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector  } from "react-redux";
import { loginSuccess } from "../features/authSlice";

export default function SignInSide() {
  const { role, isSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const location = useLocation();

  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

const handleChange = (e) => {

  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value ,
  }));
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const { email, password } = formData;
  if (!email || !password ) {
    setError("Please fill in all fields");
    return;
  }
  let response;
  try {
    response = await fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }); 
    if (response.status === 200) {
      response=await response.json();
      localStorage.setItem("token",response.token )
      localStorage.setItem("role",response.role )
      dispatch(loginSuccess({
      role:response.role,
      token:response.token,
     }))
    } else {
      setError("Signin failed");
    }
  } catch (error) {
  
    setError('Error during signin:', error);
    setError('Server response:', response?.data);

  }
};

  return (
    <>
    {isSuccess === true ? (
      <Navigate
        to={
          role === "user"
            ? "/customer"
            : role === "employee"
            ? "/employee"
            : "/admin"
        }
        state={{ from: location }}
        replace
      />
    ) : (
    <Container component="main" maxWidth="false"
    >
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vh",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // Align to the right
          justifyContent: "center",
        }}
      >
        <Grid container >
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              my: 8,
              mx: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust background color and alpha value

            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5"
              >
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1

                }}
              >
               <TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email"
  name="email"  
  autoComplete="email"
  onChange={handleChange}
  autoFocus
/>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}

                />

                <Button
                  type="submit" 
                  variant="body2"
                  sx={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#1976D2',
                    },
                    marginTop:'10px'
                  }}
                >
                  Sign In
                </Button>
                <Grid container style={{paddingTop:'10px'}}>
                 
                  <Grid item>
                    <Link href="/signup" variant="body2" >
                      {"I Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                {error && <Alert severity="warning" sx={{ marginTop: "10px" }}>{error}</Alert>}

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    )}
    </>
  );
}
