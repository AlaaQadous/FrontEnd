import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navb.css';
import { FaAngleDown } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { api } from "../../utiltis/apis";
import {Stack } from '@mui/material';
const Navbarr = () => {
  const [clickedLink, setClickedLink] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    dispatch(logOut())
    return navigate("/login")
  };
  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const handleOrderClick = () => {
    setIsOrderVisible(!isOrderVisible);
  };
  const { token } = useSelector((state) => state.auth);
  const [ima, setImage] = useState();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api(token).get("/users/image");
        console.log(response.data);
        setImage(response.data.user.doc[0].image);
      } catch (error) {
        console.error('حدث خطأ أثناء جلب الطلبات:', error);
      }
    };

    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div>
      <nav className="d-flex justify-content-between" style={navv}>
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <Stack direction='row' gap={10} alignItems="center">
  <ul className="nav flex-row"> 
  <span
  onClick={handleOrderClick}
  style={{ cursor: 'pointer', fontSize: '20px', position: 'relative' ,marginRight: '10px', 
}}
>
  Order<FaAngleDown />
  {isOrderVisible && (
    <ul style={{ position: 'absolute', top: '100%', left: 0,  background:'#f5f5f5',padding: '10px' , width:'120px' }}>
      <Stack gap={2}>
        <li className="nav-item" style={{ listStyle: 'none',width:'100px' }}>
          <Link to="/ord" style={{ color: 'black', fontSize: '15px', textDecoration: 'none',  }}>
            <span>New Orders</span>
          </Link>
        </li>
        <li className="nav-item" style={{ listStyle: 'none',width:'100px' }}>
          <Link to="/ready" style={{ color: 'black', fontSize: '15px', textDecoration: 'none',  }}>
            <span>Ready Orders</span>
          </Link>
        </li>
      </Stack>
    </ul>
  )}
</span>

    <li className="nav-item">
      <Link to="/admin" style={{ color: 'black', fontSize: '20px', textDecoration: 'none',marginRight: '10px', }}>
        <span>News</span>
      </Link>
    </li>
   

    <li className="nav-item">
      <Link to="/myfro" style={{ color: 'black', fontSize: '20px', textDecoration: 'none' ,marginRight: '10px',}}>
        <span>Profile</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/manage" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', marginRight: '10px', 
 }}>
        <span>Accounts</span>
      </Link>
    </li>
    <li className="nav-item">
    <Link style={{ color: 'black', fontSize: '20px', textDecoration: 'none', marginBottom:'15px' , marginRight:'18px'  }}>

        <span 
          style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}
          onClick={() => handleLinkClick()}>
          Logout
        </span>
      </Link>
    </li>
  </ul>

</Stack>


      </nav>

     
    </div>
  );
};

const navv = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'white',
  zIndex: '1000',
  borderBottom: '1px solid #ccc',
  background:'#f5f5f5',
};

const logoStyle = {
  width: '120px',
  height: '100px',
  paddingLeft: '20px',
};





export default Navbarr;
