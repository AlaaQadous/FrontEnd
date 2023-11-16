import React, { useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Button } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import Add from '@mui/icons-material/Add';

const ManagesTable = () => {
  const handleDelete = (userId) => {
    console.log(`Deleting user with ID: ${userId}`);
  };

  const [users, setUsers] = useState([
    {
      id: '789012',
      role: 'Employee',
      name: 'Majd Abubshara',
      email:'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '789013',
      role: 'User',
      name: 'Alaa Qadous',
      email:'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: '789012',
      role: 'Employee',
      name: 'Majd Abubshara',
      email:'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '789013',
      role: 'User',
      name: 'Alaa Qadous',
      email:'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ]);

  return (
    <Container  className="rounded mt-5 p-md-5" 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px' }}>User Manage</Typography>
      <Button variant="contained" color="primary" style={{ alignSelf: 'flex-end', marginBottom: '20px' }}> 
        <Add />
        Add Employee
      </Button>
      <TableContainer component={Paper} className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Image</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Role</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="bg-blue">
                <TableCell>
                  <Avatar src={user.image} alt="" />
                </TableCell>
                <TableCell>
                  <Typography className="pl-lg-5 pl-md-3 pl-1 name">{user.name}</Typography>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton color="secondary" onClick={() => handleDelete(user.id)}>
                    <Avatar style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }}>
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

export default ManagesTable;
