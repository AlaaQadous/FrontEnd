import React, { useState, useRef ,useEffect} from 'react';
import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";
import swal from 'sweetalert';
import Alert from "@mui/material/Alert";

const ProfileSettings = () => {
  const [error, setError] = useState('');

  const [profile, setProfile] = useState({
    email: '',
    password: '',
    myfile: '',
    userName: '',
  });

  const [ima, setImage] = useState({
    myfile: '',
    email: '',
    userName: '',
    password:'',
  });
  const { token } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
  
    setImage((prevIma) => ({
      ...prevIma,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };
  
  
  
  
  console.log("prof",profile)
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log("pro",profile)
  
    if (!profile.email || !profile.password || !profile.userName || !profile.myfile) {
      setError("Please fill in all fields");
      return;
    }
    if (profile.password.length < 6 || !/\d/.test(profile.password) || !/[a-zA-Z]/.test(profile.password)) {
      setError("Password must be at least 6 characters long and contain both letters and numbers");
      return;
    }
    const formData1 = new FormData();
    formData1.append("userName", profile.userName)
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
        setError("Update failed");
      }
    } catch (error) {
      setError('Error:', error.message);
    }

  };
  const fileInputRef = useRef();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  console.log("usersdata", "email",ima.email ,"image",ima.myfile ,"name", ima.userName)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api(token).get("/users/image");
        const { user } = response.data;
        setImage({
          myfile: user.doc[0].image || '', 
          email: user.doc[0].email,
          userName: user.doc[0].userName,
        });

        setProfile({
          myfile: user.doc[0].image || '', 
          email: user.doc[0].email,
          userName: user.doc[0].userName,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
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
            <img className="rounded-circle mt-5" src={ima.myfile} width="150px" alt="Profile" />
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
    name="userName"
    value={ima.userName}
    onChange={handleInputChange} // Use handleInputChange for both values and onChange events
    style={{ marginBottom: '20px' }}
  />
</Grid>
<Grid item xs={12} md={12}>
  <TextField
    fullWidth
    label="Email"
    variant="outlined"
    placeholder={"Email"}
    name="email"
    value={ima.email}
    onChange={handleInputChange} // Use handleInputChange for both values and onChange events
    style={{ marginBottom: '20px' }}
  />
</Grid>

            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="New Password"
                variant="outlined"
                placeholder="Password"
                name="password"
                value={profile.password}  
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
          {error && <Alert severity="warning" sx={{ marginTop: "10px" }}>{error}</Alert>}
        </Box>
      </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSettings;
