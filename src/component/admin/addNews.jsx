import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, TextField, IconButton,Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { api } from '../../utiltis/apis';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import swal from 'sweetalert';
import Clear from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import './add.css';
const AddNews = () => {
  const { token } = useSelector((state) => state.auth);

  // main
  const [cardsData, setcardsData] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api(token).get('/news/');
        console.log(response.data);
        setcardsData(response.data.news);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchOrders();
  }, [token]);

  // add
  const [add, setAdd] = useState(false);
  // close Add
  const handleClose = () => {
    setAdd(false);
    setFormData1(null);
  };
  // مشان تظهر للاضافة
  const Addhandle = (e) => {
    e.preventDefault();
    setAdd(true);
  };
  const [overlayVisible, setOverlayVisible] = useState(false);

  const [formData1, setFormData1] = useState({
    myfile: null,
    description: '',
  });

  const handleChange1 = (e) => {
    const { name, value, files } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };

  // back add news
  const onAdd = async (event) => {
    event.preventDefault();
    console.log(formData1);
    try {
      const formData2 = new FormData();
      formData2.append('description', formData1.description);
      formData2.append('myfile', formData1.myfile);
      const response = await api(token).post('/news/addNews', formData2);
      if (response.status === 200) {
        swal({
          title: 'You successfully',
          icon: 'success',
        });
      } else {
        console.log('failed');
      }
    } catch (error) {
      console.log('Error during:', error);
      console.log('Server response:');
    }
  };

  // edit
  const [edit, setEdit] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  // تظهر شاشة التعديل
  const Edithandle = (id) => {
    setSelectedNewsId(id);
    setEdit(true);
  };

  // colse edit
  const handleClose1 = () => {
    setAdd(false);
    setEdit(false);
  };

  const [formData, setFormData] = useState({
    myfile: null,
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'myfile' ? files[0] : value,
    }));
  };

  // back edit
  const onEdit = async (event) => {
    event.preventDefault();
    if (!selectedNewsId) {
      console.error('Missing selectedNewsId for edit');
      return;
    }

    try {
      const formData1 = new FormData();
      formData1.append('description', formData.description);
      formData1.append('myfile', formData.myfile);

      const response = await api(token).patch(`/news/update/${selectedNewsId}`, formData1);

      if (response.status === 200) {
        swal({
          title: 'Updated successfully',
          icon: 'success',
        });
        setEdit(false); 
      } else {
        console.log('Failed to edit');
      }
    } catch (error) {
      console.log('Error during edit:', error);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  // Inside your handleToggleClick function
  const [toggleState, setToggleState] = useState("");

  const handleToggleClick = async (cardid) => {
    try {
      const response = await api(token).patch(`/news/update1/${cardid}`);

      if (response.status === 200) {
        // Assuming the backend returns updatedNews.visible as a boolean
        const isNewsVisible = response.data.updatedNews.visible;
        const newState = isNewsVisible ? 'on' : 'off';
        setToggleState(newState);
    
        window.location.reload(); 

      } else {
        console.log('Toggle function failed');
      }
    } catch (error) {
      console.log('Error during toggle function:', error);
    }
  };

  return (
    <Container
      className="rounded mt-5 p-md-5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        marginLeft: '150px',
        padding: '20px',

      }}
    >
      <Button
        variant="contained"
        color="primary"
        style={{
          marginRight: '25px',
          alignSelf: 'flex-end',
          marginBottom: '20px',
          backgroundColor: 'rgb(229, 130, 178)',
          color: 'white',
          marginTop: '30px',
        }}
        onClick={Addhandle}
        startIcon={<AddIcon />}
      >
        Add News
      </Button>
      {overlayVisible && <div className="overlay" />}

      <Grid container spacing={3}>
        {Array.isArray(cardsData.doc) &&
          cardsData.doc.map((card) => (
            <Grid item key={card._id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" height="250" image={card.image} alt="Card image" />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {card.text || card.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px', backgroundColor: 'rgb(229, 130, 178)', color: 'white' }}
                    onClick={() => Edithandle(card._id)}
                  >
                    Edit
                  </Button>
                  <IconButton
                    style={{
                      marginTop: '20px',
                      marginLeft: '20px',
                      color: 'white',
                      borderRadius: '50%',
                    }}
                    onClick={() => handleToggleClick(card._id)}
                  >
                    {card.visible ? <Avatar style={{backgroundColor: 'green' }}>
  <DoneIcon />
</Avatar>:<Avatar style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }} >
        <Clear />
      </Avatar> }
                  </IconButton>


                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {add && (
      <div className="overlay">
        <Grid
          container
          spacing={2}
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            width: '100%',
            paddingTop: '200px',
          }}
        >
          <Grid item xs={12} md={6} style={{ width: '600px', margin: 'auto' }}>
            <Card sx={{ maxWidth: 600, margin: 'auto' }}>
              <div style={{ textAlign: 'right' }}>
                <Button onClick={handleClose} style={{ color: 'rgb(229, 130, 178)' }}>
                  <CloseIcon />
                </Button>
              </div>{' '}
              <CardContent>
                <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>
                  Add News
                </Typography>
                <form className="forms-sample" onSubmit={onAdd}>
                  <div className="mb-3">
                    <label>Image</label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="myfile"
                      name="myfile"
                      type="file"
                      inputProps={{ accept: 'myfile/*' }}
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="description"
                      name="description"
                      autoComplete="description"
                      autoFocus
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }}>
                      Add
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </div>
      )}
     {edit && (
      <div className="overlay">
        <Grid
          container
          spacing={2}
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            width: '100%',
            paddingTop: '200px',
          }}
        >
          <Grid item xs={12} md={6} style={{ width: '600px', margin: 'auto' }}>
            <Card sx={{ maxWidth: 600, margin: 'auto' }}>
              <div style={{ textAlign: 'right' }}>
                <Button onClick={handleClose1} style={{ color: 'rgb(229, 130, 178)' }}>
                  <CloseIcon />
                </Button>
              </div>{' '}
              <CardContent>
                <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>
                  Edit News
                </Typography>
                <form className="forms-sample" onSubmit={onEdit}>
                  <div className="mb-3">
                    <label>Image</label>
                    <TextField
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
                  <div className="mb-3">
                    <label>Description</label>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="description"
                      name="description"
                      autoComplete="description"
                      autoFocus
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }}>
                      Edit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
      </div>
    )}
    </Container>
  );
};

export default AddNews;
