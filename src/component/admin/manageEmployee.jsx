import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Button } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import Add from '@mui/icons-material/Add';
import { api } from "../../utiltis/apis";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import swal from 'sweetalert';


const ManagesTable = () => {

  const handleDelete = (userId) => {
    console.log(`Deleting user with ID: ${userId}`);
    try {
      const response =  api(token).delete(`/users/deleteuser/${userId}`);
      console.log(response.data);
      if (response.data) {
        swal({
          title: "User deleted",
          icon: "success"
        }).then((isOk) => {
          if (isOk) {
          }
        });
      }
      return response.data; 
    } catch (error) {
      console.error('حدث خطأ أثناء معالجة الطلب:', error);
      throw error;
    }
  };
  
  const handleClose = () => {
    setAdd(false);
    setFormData(null);
  };

  const [users, setUsers] = useState([]);
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const Addhandle = () => {
    setAdd(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response =  api(token).post("/users/addEmployee", formData );
      if (response.status === 200) {
        swal({
          title: 'You succeeded',
          icon: 'success',
        });
      } else {
        console.log('failed');
      }
    }
     catch (error) {
      console.error('error:', error);
    }

  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api(token).get('/users/profilusers');
        console.log(response.data)
        setUsers(response.data.users); 
      } catch (error) {
        console.error('حدث خطأ أثناء جلب الطلبات:', error);
      }
    };
    fetchUsers();
  }, [token]);
  return (
    <Container className="rounded mt-5 p-md-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', marginLeft: '200px', padding: '20px' }}>
      <Typography variant="h2" className="font-weight-bold" style={{ marginTop: '15px', textAlign: 'center' }}>User Manage</Typography>
      <Button variant="contained" color="primary" style={{ alignSelf: 'flex-end', marginBottom: '20px', backgroundColor: 'rgb(229, 130, 178)', color: 'white' }} onClick={Addhandle}>
        <Add />
        Add Employee
      </Button>
      <TableContainer component={Paper} className="table-responsive">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', padding: '8px', textAlign: 'center' }}>Image</TableCell>
              <TableCell style={{ fontWeight: 'bold', padding: '8px', textAlign: 'center' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold', padding: '8px', textAlign: 'center' }}>Email</TableCell>
              <TableCell style={{ fontWeight: 'bold', padding: '8px', textAlign: 'center' }}>Role</TableCell>
              <TableCell style={{ fontWeight: 'bold', padding: '8px', textAlign: 'center' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Array.isArray(users.doc) && users.doc.map((user) => (
             
             <TableRow key={user._id} className="bg-blue">
  <TableCell>
    <Avatar src={user.image} alt="" style={{ padding: '8px', textAlign: 'center' }}/>
  </TableCell>
  <TableCell>
    <Typography className="pl-lg-5 pl-md-3 pl-1 name" style={{ padding: '8px', textAlign: 'center' }}>{user.userName}</Typography>
  </TableCell>
  <TableCell style={{ padding: '8px', textAlign: 'center' }}>{user.email}</TableCell>
  <TableCell style={{ padding: '8px', textAlign: 'center' }}>{user.role}</TableCell>
  <TableCell style={{ padding: '8px', textAlign: 'center' }}>
    <IconButton color="secondary" onClick={() => handleDelete(user._id)}>
      <Avatar style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }} >
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
        <div className="row" style={{ position: 'absolute', bottom: '50%', left: '50%', transform: 'translate(-50%, -50%)', top: '30%' }}>
          <div className="col-md-6" style={{ width: '600px' }}>
            <div className="card mx-auto">
              <div className="card-body">
              <div style={{ textAlign: 'right'}}>
                  <Button onClick={handleClose} style={{ color: 'rgb(229, 130, 178)' }}>
                    <CloseIcon />
                  </Button>
                </div>
                <h4 className="card-title" style={{ textAlign: 'center', marginBottom: '20px', color: 'rgb(229, 130, 178)' }}>New Employee</h4>
                <form className="forms-sample" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Employee Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={formData.username}
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