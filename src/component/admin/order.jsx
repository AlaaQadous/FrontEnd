import React, { useState, useRef } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Button } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import Add from '@mui/icons-material/Add';
import  {Check}  from '@mui/icons-material';


const Order = () => {


  const [orders, setorders] = useState([
    {
      id: '789012',
      orderDate: '12/2/2001',
      description: 'dfghn,lbv;dfghln,;vbv',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    }, 
    {id: '789012',
    orderDate: '12/2/2001',
    description: 'qwertyuikjhgfdertyuiklkjhg',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },{
    id: '789012',
    orderDate: '12/2/2001',
    description: 'werdtfyguhijklkjhg',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  
   
  ]);
  
  return (
    <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' , marginLeft: '200px', padding: '20px'  }}>
    <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', marginBottom:'10px', }}>Order Manage</Typography>
    <TableContainer component={Paper} className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold',textAlign: 'center'  }}>Image</TableCell>
              <TableCell style={{ fontWeight: 'bold' ,textAlign: 'center' }}>Order Date</TableCell>
              <TableCell style={{ fontWeight: 'bold',textAlign: 'center'  }}>Description</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center'  }} >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((orders) => (
              <TableRow key={orders.id} className="bg-blue">
                <TableCell style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <Avatar src={orders.image} alt="" style={{ borderRadius: '0', width:'100px', height:'100px', margin: 'auto' }} />
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <Typography className="pl-lg-5 pl-md-3 pl-1 name">{orders.orderDate}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{orders.description}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <IconButton color="secondary" > 
                  <Avatar style={{ backgroundColor: "green" }}>
                      <Check />
                    </Avatar>
                    </IconButton>
                    <IconButton color="secondary" > 
                     <Avatar style={{ backgroundColor: "red" ,  }}>
                      <Clear />
                    </Avatar>
                  </IconButton>
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
