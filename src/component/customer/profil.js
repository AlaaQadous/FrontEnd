import React, { useState } from 'react';
import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';
import Image from './image/alaa.jpg';

const ProfileSettings = () => {
  const [info, setInfo] = useState({
    firstName: 'Alaa',
    lastName: 'qadous',
    email: 'alaa@gmail.com',
    password: 'q24#57',
    image: Image,
  });

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", profile.email);
    formData.append("password", profile.password);
    formData.append("newPassword", profile.newPassword);
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);

    if (!profile.email || !profile.password || !profile.firstName || !profile.lastName) {
      console.log("Please fill in all fields");
      return;
    }

    // Password validation
    if (profile.newPassword.length < 6 || !/\d/.test(profile.newPassword) || !/[a-zA-Z]/.test(profile.newPassword)) {
      console.log("Password must be at least 6 characters long and contain both letters and numbers");
      return;
    }

    console.log({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      password: profile.password,
      newPassword: profile.newPassword,
    });
  };
  return (
    <Container component="div" maxWidth="lg" className="rounded bg-white mt-5 mb-5">
      <Grid container style={{ paddingTop: '90px' }}>
        <Grid item xs={12} md={3} className="border-right">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3} py={5}>
            <img className="rounded-circle mt-5" width="150px" src={info.image} alt="Profile" />
            <div className="mb-3">
              <label htmlFor="formFile" className="btn  mt-2" style={{backgroundColor: 'rgb(229, 130, 178)' ,color: 'white'}}>
                Upload Profile Picture
              </label>
              <input type="file" className="form-control" id="formFile" style={{ display: 'none' }} />
            </div>
          </Box>



        </Grid>
        <Grid item xs={12} md={5} className="border-right">
          <Box p={3} py={5}>
            <Box mb={3}>
              <Typography variant="h4">Profile Settings</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  placeholder={info.firstName}

                  name="firstName"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>

                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label=" Old Password"
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label=" New Password"
                  variant="outlined"
                  placeholder="Password"
                  name="newPassword"
                  onChange={handleInputChange}
                  type="password"
                />
              </Grid>
            </Grid>
            <Box mt={5} textAlign="center">
              <Button variant="contained" style={{backgroundColor: 'rgb(229, 130, 178)' ,color: 'white'}} onClick={handleSubmit}>
                Save Profile
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSettings;
