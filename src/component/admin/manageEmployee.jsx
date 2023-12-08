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
      email: 'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '789013',
      role: 'User',
      name: 'Alaa Qadous',
      email: 'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: '789012',
      role: 'Employee',
      name: 'Majd Abubshara',
      email: 'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '789013',
      role: 'User',
      name: 'Alaa Qadous',
      email: 'alaa@gmail.com',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ]);

  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const Addhandle = () => {
    setAdd(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your logic to handle form submission or API calls here
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
      <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px' }}>User Manage</Typography>
      <Button variant="contained" color="primary" style={{ alignSelf: 'flex-end', marginBottom: '20px', backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={Addhandle}>
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
      {add && (
  <div className="row" style={{ position: 'absolute', bottom: '50%', left: '50%', transform: 'translate(-50%, -50%)',top: '25%', }}>
    <div className="col-md-6" style={{ width: '600px' }}>
      <div className="card mx-auto">
        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>New Employee</h4>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3" style={{ marginBottom: '20px' }}>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-lg " style={{ backgroundColor: 'rgb(229, 130, 178)', color: 'white' }}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)}

    </Container>
  );
};

export default ManagesTable;
