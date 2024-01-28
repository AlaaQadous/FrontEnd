import React, { useState ,useEffect} from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";

const ReadyOrder = () => {
    const handleDelete = (userId) => {
        console.log(`Deleting user with ID: ${userId}`);
    };

    const { token } = useSelector((state) => state.auth);

    const [orders, setorders] = useState([ ]);


    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await api(token).get('/order/getStates');
            console.log(response.data);
            setorders(response.data.order);
          } catch (error) {
            console.error('حدث خطأ أثناء جلب الطلبات:', error);
          }
        };
        fetchOrders();
      }, [token]); 


    return (
        <Container className="rounded mt-5 p-md-5" style={{ marginLeft: '150px', padding: '20px' ,display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', marginRight: '15px' }}>
            <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', marginBottom: '15px', }}>All Orders</Typography>

            <TableContainer component={Paper} className="table-responsive">
                <Table>
                    <TableHead >
                    <TableRow style={{ background: 'rgb(243,171,203)', background: ' radial-gradient(circle, rgba(243,171,203,1) 25%, rgba(215,251,252,1) 93%)' }}>
                            <TableCell style={{ fontWeight: 'bold'  ,padding: '8px', textAlign: 'center'}}>Image</TableCell>
                            <TableCell style={{ fontWeight: 'bold' ,padding: '8px', textAlign: 'center'}}>Order Date</TableCell>
                            <TableCell style={{ fontWeight: 'bold' ,padding: '8px', textAlign: 'center'}}>Description</TableCell>
                            <TableCell style={{ fontWeight: 'bold' ,padding: '8px', textAlign: 'center'}}>Price</TableCell>
                            <TableCell style={{ fontWeight: 'bold',padding: '8px', textAlign: 'center' }}>Delivary Date</TableCell>
                            <TableCell style={{ fontWeight: 'bold',padding: '8px', textAlign: 'center' }}>States</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                    {Array.isArray(orders.doc) && orders.doc.map((order) => (
                            <TableRow key={order.id} className="bg-blue">
                                <TableCell style={{textAlign: 'center'}}>
                                    <Avatar src={order.image} alt="" style={{ borderRadius: '0', width: '100px', height: '100px' }} />
                                </TableCell>
                                <TableCell style={{textAlign: 'center'}}>
                                    <Typography className="pl-lg-5 pl-md-3 pl-1 name">{order.date}</Typography>
                                </TableCell>
                                <TableCell style={{textAlign: 'center',height:'10px',width:'40%'}}>{order.description}</TableCell>
                                <TableCell style={{textAlign: 'center'}}>{order.price}</TableCell>
                                <TableCell style={{textAlign: 'center'}}>{order.DeliveryDate}</TableCell>

                                <TableCell style={{textAlign: 'center'}}>
                                    {order.state === 'Ready' ? (
                                        <CheckCircleIcon style={{ color: 'green' }} />
                                    ) : order.state=== 'InProgress' ? (
                                        <WarningIcon style={{ color: 'yellow' }} />
                                    ) : (
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red', display: 'inline-block' }}></div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ReadyOrder;
