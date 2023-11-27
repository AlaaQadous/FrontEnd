import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Description } from '@mui/icons-material';

const AddNews = () => {
  const cardsData = [
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Some example text some example text. John Doe is an architect and engineer',
    },
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Some example text some example text. John Doe is an architect and engineer',
    },
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Some example text some example text. John Doe is an architect and engineer',
    },
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Some example text some example text. John Doe is an architect and engineer',
    },
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Some example text some example text. John Doe is an architect and engineer',
    },
    {
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'Some example text some example text. John Doe is an architect and engineer',
    },
  ];
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    Image: '',
    Description: '',
  });

  const Addhandle = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const onAdd = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [edit, setEdit] = useState(false);

  const Edithandle = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const onEdit = (event) => {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
      <Button variant="contained" color="primary" style={{ marginRight: '25px', alignSelf: 'flex-end', marginBottom: '20px', backgroundColor: 'rgb(229, 130, 178)', color: 'white', marginTop: '20px' }} onClick={Addhandle} startIcon={<AddIcon />}>
        Add News
      </Button>

      {Array.from({ length: Math.ceil(cardsData.length / 3) }, (v, i) => i * 3).map((startIndex) => (
        <Grid container spacing={2} key={startIndex}>
          {cardsData.slice(startIndex, startIndex + 3).map((card, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ maxWidth: 300, margin: '20px 0', marginLeft: '30px' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={card.image}
                  alt="Card image"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {card.text || card.description}
                  </Typography>
                  <Button variant="contained" color="primary" style={{ marginTop: '20px', backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={Edithandle}>
                    Edit
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}

      {add && (
        <Grid container spacing={2} style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, 0%)', width: '100%', paddingTop: '100px' }}>
          <Grid item xs={12} md={6} style={{ width: '600px', margin: 'auto' }}>
            <Card sx={{ maxWidth: 600, margin: 'auto' }}>
              <CardContent>
                <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>Add News</Typography>
                <form className="forms-sample" onSubmit={onAdd}>
                  <div className="mb-3">
                    <label> Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="Image"
                      value={formData.Image}

                      onChange={handleInputChange}
                      />
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <TextField
                      type="text"
                      className="form-control"
                      id="Description"
                      value={formData.Description}
                      onChange={handleInputChange}
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
      )}
      {edit && (
        <Grid container spacing={2} style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, 0%)', width: '100%', paddingTop: '100px' }}>
          <Grid item xs={12} md={6} style={{ width: '600px', margin: 'auto' }}>
            <Card sx={{ maxWidth: 600, margin: 'auto' }}>
              <CardContent>
                <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>Edit News</Typography>
                <form className="forms-sample" onSubmit={onEdit}>
                  <div className="mb-3">
                    <label> Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="Image"
                      value={formData.Image}

                      onChange={handleInputChange}
                      />
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <TextField
                      type="text"
                      className="form-control"
                      id="Description"
                      value={formData.Description}
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
      )}
      
    </Container>
  );
};

export default AddNews;
