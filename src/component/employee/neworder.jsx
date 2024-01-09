import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from '@mui/material';
import swal from 'sweetalert';
import { api } from '../../utiltis/apis';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const OrderList = () => {
  const [Order, setOrdersData] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [add, setAdd] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [formData, setFormData] = useState({
    comment:'',
    price:'',
    DeliveryDate:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setAdd(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api(token).get('/order/1getOrderEmpl');
        setOrdersData(response.data.order);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchOrders();
  }, [token]);

  const onAdd = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData); 
    try {
      const response = await api(token).put(
        `order/info/${selectedOrder._id}`,
        JSON.stringify(formData),
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response);
      if (response.status === 200) {
        swal({
          title: 'You succeeded',
          icon: 'success',
        });
      } else {
        console.log('failed');
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <Container sx={{ marginTop: '100px', marginLeft: '200px', padding: '20px' }}>
      <Typography variant="h2" style={{ textAlign: 'center', marginBottom: '40px' }}>
        New Order
      </Typography>
      <Grid container spacing={3}>
        {Array.isArray(Order.doc) &&
          Order.doc.map((order) => (
            <Grid item key={order._id} xs={12} sm={6} md={4}>
              <Card>
                <img src={order.image} alt={`Order ${order.material}`} width="100%" height="260" />
                <CardContent>
                  <Typography variant="h4" component="div">
                    {order.material}
                    <Typography
  sx={{
    color: '#7db921',
    fontSize: '30px',
    textTransform: 'uppercase',
    float: 'right',
    marginTop: '3px',
  }}
>
  {order.lengthValue} &times; {order.widthValue}
</Typography>

                  </Typography>
                  <div style={{ marginTop: '10px', marginBottom: '20px', textAlign: 'justify', textJustify: 'inter-word' }}>
                    <p
                      className="description"
                      style={{
                        textAlign: 'justify',
                        width: '100%',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                      }}
                    >
                      {order.description}
                    </p>
                  </div>
                  <div className="action" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" size="small" style={{ backgroundColor: 'rgb(229, 130, 178)' }} onClick={() => { setAdd(true); setSelectedOrder(order); }}>
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
                <div style={{ textAlign: 'right'}}>
                  <Button onClick={handleClose} style={{ color: 'rgb(229, 130, 178)' }}>
                    <CloseIcon />
                  </Button>
                </div>
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
                    value={formData.price} 
                    autoFocus
                    onChange={handleChange}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="DeliveryDate"
                    label="DeliveryDate"
                    type="date"
                    value={formData.DeliveryDate}
                    id="DeliveryDate"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange}
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
                    value={formData.comment}
                    onChange={handleChange}
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
