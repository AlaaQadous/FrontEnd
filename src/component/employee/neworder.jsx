import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';

const OData = [
  {
    material: 'Hotel Hilton',
    width: 188,
    height: 188,
    image: 'https://i.imgur.com/JN2wkb6.jpg',
    description: 'SDFGHJKLJHGFGHJKM,NBVCGHJNMBVGHJMNBVGHJKM,NBVFDRTYUJIKL,MNBVCDFGHB',
  },
  {
    material: 'Hotel Hilton',
    width: 188,
    height: 188,
    image: 'https://i.imgur.com/JN2wkb6.jpg',
    description: 'SDFGHJKLJHGFGHJKM,NBVCGHJNMBVGHJMNBVGHJKM,NBVFDRTYUJIKL,MNBVCDFGHB',
  },
  {
    material: 'Hotel Hilton',
    width: 188,
    height: 188,
    image: 'https://i.imgur.com/JN2wkb6.jpg',
    description: 'SDFGHJKLJHGFGHJKM,NBVCGHJNMBVGHJMNBVGHJKM,NBVFDRTYUJIKL,MNBVCDFGHB',
  },
];

const OrderList = () => {
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

  return (
    <Container sx={{ marginTop: '100px' }}>
      <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '40px', }}>New Order</Typography>
      <Grid container spacing={3}>
        {OData.map((Order, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
            
          <img src={Order.image} alt={`Hotel ${Order.name}`} width="100%" height="260" />
                     <CardContent>
                <Typography variant="h4" component="div">
                  {Order.material}
                  <Typography sx={{ color: '#7db921', fontSize: '20PX', textTransform: 'uppercase', float: 'right', marginTop:'10px' }}>
                    {Order.width} <span style={{ fontSize: '0.8em' }}>&times;</span> {Order.height}
                  </Typography>
                </Typography>
                <div style={{ marginTop: '10px', marginBottom: '20px', textAlign: 'justify', textJustify: 'inter-word' }}>
                  <p className="description" style={{ textAlign: 'justify', width: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {Order.description}
                  </p>
                </div>
                <div className="action" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant="contained" size="small" style={{ backgroundColor: 'rgb(229, 130, 178)' }} onClick={Addhandle}>
                    Add Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {add && (
       <Grid container spacing={2} style={{ position: 'absolute', top: '50%', left: '55%', transform: 'translate(-50%, -50%)', width: '100%' }}>
       <Grid item xs={12} md={6} style={{ maxWidth: 600, margin: 'auto' }}>
         <Card sx={{ margin: 'auto' }}>
           <CardContent>
             <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>
               Add Details
             </Typography>
             <form className="forms-sample" onSubmit={onAdd}>
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 id="price"
                 label="Price"
                 name="price"
                 autoComplete="price"
                 autoFocus
               />
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 name="date"
                 label="Date"
                 type="date"
                 id="date"
                 InputLabelProps={{
                   shrink: true,
                 }}
               />
               <TextField
                 margin="normal"
                 required
                 fullWidth
                 id="comment"
                 label="Comment"
                 name="comment"
                 autoComplete="comment"
                 autoFocus
               />
               <div style={{ textAlign: 'center' }}>
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
    </Container>
  );
};

export default OrderList;
