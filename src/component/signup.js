import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as MuiLink } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import image from './customer/image/12.png';

export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    if (!email || !password || !firstName || !lastName) {
      console.log("Please fill in all fields");
      return;
    }
    // Password validation
    if (password.length < 1 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      console.log("Password must be at least 6 characters long and contain both letters and numbers");
      return;
    }
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <Container component="main" maxWidth="false"
    >
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
              <Typography component="h1" variant="h5">
                Sign Up
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
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
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
                />

                <MuiLink
                  href="/"
                  variant="body2"
                  sx={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: 'blue', // Set your desired background color
                    color: 'white', // Set your desired text color
                    padding: '10px', // Adjust padding as needed
                    borderRadius: '5px', // Set your desired border radius
                    textDecoration: 'none', // Remove underline
                    '&:hover': {
                      backgroundColor: '#1976D2', // Set your desired hover background color
                    },
                  }}
                >
                  Sign In
                </MuiLink>


                <Grid container>
                  <Grid item>
                    <MuiLink href="/signin" variant="body2">
                      {"I have an account? Sign In"}
                    </MuiLink>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
