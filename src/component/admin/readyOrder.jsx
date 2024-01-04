import React, { useState ,useEffect} from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";

const ReadyOrder = () => {
   
    const { token } = useSelector((state) => state.auth);

    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await api(token).get('/order/get');
          console.log(response.data);
          setOrders(response.data.order);
        } catch (error) {
          console.error('حدث خطأ أثناء جلب الطلبات:', error);
        }
      };
      fetchOrders();
    }, [token]); 
    return (
        <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft: '200px', padding: '20px'  }}>
            <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', marginBottom: '15px' }}>Ready Orders</Typography>
            <TableContainer component={Paper} className="table-responsive">
                <Table>
                    <TableHead>
                    <TableRow>
  <TableCell style={{ fontWeight: 'bold' }}>Image</TableCell>
  <TableCell style={{ fontWeight: 'bold' }}>Order Date</TableCell>
  <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
  <TableCell style={{ fontWeight: 'bold' }}>Employee Name</TableCell>
  <TableCell style={{ fontWeight: 'bold' }}>Delivary Date</TableCell>
  <TableCell style={{ fontWeight: 'bold' }}>Price</TableCell>
</TableRow>

                    </TableHead>
                    <TableBody>
                    {Array.isArray(orders.doc) && orders.doc.map((order) => (
                            <TableRow key={order.id} className="bg-blue">
                                <TableCell>
                                    <Avatar src={order.image} alt="" style={{ borderRadius: '0'  , width:'100px', height:'100px'}} />
                                </TableCell>
                                <TableCell>
                                    <Typography className="pl-lg-5 pl-md-3 pl-1 name">{order.date}</Typography>
                                </TableCell>
                                <TableCell>{order.description}</TableCell>
                                <TableCell>{order.employeeName}</TableCell>
                                <TableCell>{order.DeliveryDate}</TableCell>
                                <TableCell>{order.price}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ReadyOrder;
