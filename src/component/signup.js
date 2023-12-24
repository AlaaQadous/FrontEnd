import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as MuiLink } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Alert from "@mui/material/Alert";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function SignUpSide() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    myfile: null,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, email, myfile } = formData;
    if (!email || !password || !username || !myfile) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setError("Password must be at least 6 characters long and contain both letters and numbers");
      return;
    }
    let response;
    try {
      const formData1 = new FormData();
      formData1.append("username", formData.username)
      formData1.append("password", formData.password)
      formData1.append("email", formData.email)
      formData1.append("myfile", formData.myfile)


      response = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',

        body: formData1,
      });
      console.log(response);
      if (response.status === 200) {
        swal({
          title: "You registered successfully,please login",
          icon: "success"
        }).then((isOk) => {
          if (isOk) {
            navigate("/login");
          }
        })

      } else {
        setError("Signup failed");
      }
    } catch (error) {
      console.log(response);
      setError('Error during signup:', error);
      setError('Server response:', response?.data);

    }
  };

  return (
    <Container component="main" maxWidth="false">
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vh",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
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
              backgroundColor: "rgba(255, 255, 255, 0.5)",
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
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="myfile"
                  name="myfile"
                  type="file"
                  inputProps={{ accept: 'myfile/*' }}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
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
                    }
                  }}
                >
                  Sign In
                </Button>

                <Grid container>
                  <Grid item>
                    <MuiLink href="/login" variant="body2">
                      {"I have an account? Sign In"}
                    </MuiLink>
                  </Grid>
                </Grid>

                {error && <Alert severity="warning" sx={{ marginTop: "10px" }}>{error}</Alert>}

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
