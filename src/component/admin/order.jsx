import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import { Check } from '@mui/icons-material';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";
import swal from 'sweetalert';

const Order = () => {
  const { token } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api(token).get('/order/');
        console.log(response.data);
        setOrders(response.data.order);
      } catch (error) {
        console.error('حدث خطأ أثناء جلب الطلبات:', error);
      }
    };
    fetchOrders();
  }, [token]); 

  const handleProcessOrder = async (orderId) => {
    try {
      const response = await api(token).patch(`/order/${orderId}`);
      console.log(response.data);
      if (response.data) {
        swal({
          title: "Order updated to be  confirmed",
          icon: "success"
        }).then((isOk) => {
          if (isOk) {
            // هنا يمكنك إضافة أي تحديثات إضافية للواجهة إذا كنت بحاجة إليها
          }
        });
      }
      return response.data; // يمكنك نقل هذا إلى الأسطر السابقة إذا كنت تريد استخدامه بعد العملية
    } catch (error) {
      console.error('حدث خطأ أثناء معالجة الطلب:', error);
      throw error;
    }
  };
  
  const handleProcessorder = async (orderId) => {
    try {
      const response = await api(token).delete(`/order/${orderId}`);
      console.log(response.data);
      if (response.data) {
        swal({
          title: "Order deleted",
          icon: "success"
        }).then((isOk) => {
          if (isOk) {
          }
        });
      }
      return response.data; // يمكنك نقل هذا إلى الأسطر السابقة إذا كنت تريد استخدامه بعد العملية
    } catch (error) {
      console.error('حدث خطأ أثناء معالجة الطلب:', error);
      throw error;
    }
  };
  return (
    <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '200px', padding: '20px' }}>
      <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', marginBottom: '10px' }}>Order Manage</Typography>
      <TableContainer component={Paper} className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Image</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Order Date</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Description</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Length</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Width</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Material</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
<TableBody>
  {Array.isArray(orders.doc) && orders.doc.map((order) => (
    <TableRow key={order._id} className="bg-blue">
      <TableCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      {order.image && (
        <img src={order.image} alt="" style={{ borderRadius: '0', width: '100px', height: '100px', margin: 'auto' }} />
      )}
    </TableCell>
      <TableCell style={{ textAlign: 'center' }}>
        <Typography className="pl-lg-5 pl-md-3 pl-1 name">{order.date}</Typography>
      </TableCell>
      <TableCell style={{ textAlign: 'center' }}>{order.description}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{order.lengthValue}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{order.widthValue}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{order.material}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton color="secondary" onClick={() => handleProcessOrder(order._id)}>
                      <Avatar style={{ backgroundColor: 'green' }}>
                        <Check />
                      </Avatar>
                    </IconButton>

                    <IconButton color="secondary" onClick={() => handleProcessorder(order._id)}>
                      <Avatar style={{ backgroundColor: 'red' }}>
                        <Clear />
                      </Avatar>
                    </IconButton>
                  </div>
                </TableCell>
    </TableRow>
  ))}
</TableBody>


        </Table>
      </TableContainer>
    </Container>
  );
};

export default Order;
