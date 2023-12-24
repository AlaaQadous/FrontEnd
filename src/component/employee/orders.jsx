import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const ReadyOrder = () => {
    const handleDelete = (userId) => {
        console.log(`Deleting user with ID: ${userId}`);
    };

    const [users, setUsers] = useState([
        {
            id: '789012',
            OrderDate: '2/2/2023',
            Description: 'dsfgjhkjlkmhngbfghtyj',
            EmployeeName: 'Majd Abubshara',
            DelivaryDate: '12/2/2023',
            price: '23$',
            image: 'https://i0.wp.com/www.mostlyblogging.com/wp-content/uploads/2018/11/PosterMyWall.png?resize=683%2C1024&ssl=1',
            status: 'ready',
        },
        {
            id: '789012',
            OrderDate: '2/2/2023',
            Description: 'dsfgjhkjlkmhngbfghtyj',
            EmployeeName: 'Majd Abubshara',
            DelivaryDate: '12/2/2023',
            price: '23$',
            image: 'https://th.bing.com/th/id/R.d2f95ecd6ed4f0528c24f1ce0251f2fb?rik=17K7omSYnq4HhA&pid=ImgRaw&r=0',
            status: 'Unconfirmed',
        },
        {
            id: '789012',
            OrderDate: '2/2/2023',
            Description: 'dsfgjhkjlkmhngbfghtyj',
            EmployeeName: 'Majd Abubshara',
            DelivaryDate: '12/2/2023',
            price: '23$',
            image: 'https://i0.wp.com/www.mostlyblogging.com/wp-content/uploads/2018/11/PosterMyWall.png?resize=683%2C1024&ssl=1',
            status: 'ready',
        }, {
            id: '789012',
            OrderDate: '2/2/2023',
            Description: 'dsfgjhkjlkmhngbfghtyj',
            EmployeeName: 'Majd Abubshara',
            DelivaryDate: '12/2/2023',
            price: '23$',
            image: 'https://th.bing.com/th/id/R.d2f95ecd6ed4f0528c24f1ce0251f2fb?rik=17K7omSYnq4HhA&pid=ImgRaw&r=0',
            status: 'Unconfirmed',
        },

    ]);

    return (
        <Container className="rounded mt-5 p-md-5" style={{ marginLeft: '200px', padding: '20px' ,display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', marginRight: '15px' }}>
            <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', marginBottom: '15px', }}>Ready Orders</Typography>

            <TableContainer component={Paper} className="table-responsive">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Image</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Order Date</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Delivary Date</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>States</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} className="bg-blue">
                                <TableCell>
                                    <Avatar src={user.image} alt="" style={{ borderRadius: '0', width: '100px', height: '100px' }} />
                                </TableCell>
                                <TableCell>
                                    <Typography className="pl-lg-5 pl-md-3 pl-1 name">{user.OrderDate}</Typography>
                                </TableCell>
                                <TableCell>{user.Description}</TableCell>
                                <TableCell>{user.price}</TableCell>
                                <TableCell>{user.DelivaryDate}</TableCell>

                                <TableCell>
                                    {/* إضافة أيقونة بناءً على حالة الطلب */}
                                    {user.status === 'ready' ? (
                                        <CheckCircleIcon style={{ color: 'green' }} />
                                    ) : user.status === 'Unconfirmed' ? (
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
