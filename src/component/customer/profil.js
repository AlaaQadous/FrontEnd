import React, { useState, useRef ,useEffect} from 'react';
import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";
import swal from 'sweetalert';
const ProfileSettings = () => {

  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
    myfile: '',
  });
  const { token } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", profile.email);
    formData.append("password", profile.password);
    formData.append("userame", profile.userame);
    formData.append("myfile", profile.myfile);

    if (!profile.email || !profile.password || !profile.username || !profile.myfile) {
      console.log("Please fill in all fields");
      return;
    }

    // Password validation
    if (profile.password.length < 6 || !/\d/.test(profile.password) || !/[a-zA-Z]/.test(profile.password)) {
      console.log("Password must be at least 6 characters long and contain both letters and numbers");
      return;
    }

    console.log({
      username: profile.username,
      email: profile.email,
      password: profile.password,
      myfile: profile.myfile
    });
    const formData1 = new FormData();
    formData1.append("username", profile.username)
    formData1.append("password", profile.password)
    formData1.append("email", profile.email)
    formData1.append("myfile", profile.myfile)
    try {
      const response = await api(token).put("/users/profile", formData1);
      console.log(response);

      if (response.status === 200) {
        swal({
          title: "Successfully updated",
          icon: "success"
        });
      } else {
        console.log("Update failed");
      }
    } catch (error) {
      console.log('Error:', error.message);
    }

  };
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [ima , setImage]=useState();
  useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await api(token).get("/users/image");
          console.log(response.data);
          setImage(response.data.user.doc[0].image);
        } catch (error) {
          console.error('حدث خطأ أثناء جلب الطلبات:', error);
        }
      };
    
      if (token) {
        fetchOrders();
      }
    }, [token]);
  return (
    <Container component="div" maxWidth="lg" className="rounded bg-white mt-5 mb-5" style={{ marginLeft: '250px' }}>
      <Grid container style={{ paddingTop: '60px' }}>
        <Grid item xs={12} md={3} className="border-right">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3} py={5}>
            <img className="rounded-circle mt-5" src={ima} width="150px" alt="Profile" />
            <div className="mb-3">
              <label htmlFor="formFile" className="btn mt-2" style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={handleButtonClick}>
                Upload Profile Picture
              </label>
              <input
                ref={fileInputRef}
                style={{ display: 'none' }}
                margin="normal"
                required
                fullWidth
                id="myfile"
                name="myfile"
                type="file"
                inputProps={{ accept: 'myfile/*' }}
                onChange={handleInputChange}
              />
            </div>

          </Box>
        </Grid>
        <Grid item xs={12} md={5} className="border-right">
          <Box p={3} py={5}>
            <Box mb={3}>
              <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>Profile Settings</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="User Name"
                  variant="outlined"
                  name="username"
                  onChange={handleInputChange}
                  style={{ marginBottom: '20px' }}
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
                  style={{ marginBottom: '20px' }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label=" New Password"
                  variant="outlined"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  style={{ marginBottom: '20px' }}
                />
              </Grid>
            </Grid>
            <Box mt={5} textAlign="center">
              <Button variant="contained" style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={handleSubmit}>
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
