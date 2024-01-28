import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import './navb.css';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { api } from "../../utiltis/apis";
import {Stack } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';

const logoStyle = { width: '120px', height: '100px', paddingLeft: '20px' };
const commonLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '20px', 
};

const Navbar = () => {

  const [isOrderVisible, setIsOrderVisible] = useState(false);

  const handleOrderClick = () => {
    setIsOrderVisible(!isOrderVisible);
  };

  const [clickedLink, setClickedLink] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const [ima , setImage]=useState();
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
  
  console.log("ima"+ima);

  const handleLinkClick = () => {
    dispatch(logOut());
    return navigate("/login");
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between',background:'#f5f5f5' }}>
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <Stack direction='row'>
       
       <ul className="nav flex-row" style={{ listStyleType: 'none', padding: '0' }}>
      
        <span
  onClick={handleOrderClick}
  style={{ cursor: 'pointer', fontSize: '20px', position: 'relative' ,marginRight: '10px', marginTop:'7px'
}}
>
  Order <FaAngleDown />
  {isOrderVisible && (
    <ul style={{ position: 'absolute', top: '100%', left: 0,  background:'#f5f5f5',padding: '10px' , width:'120px' }}>
      <Stack gap={2}>
     
          <li className="nav-item" style={{ listStyle: 'none',width:'100px' }}>
          <Link to="/employee" style={{ color: 'black', fontSize: '15px', textDecoration: 'none',  }}>
              <span style={{ paddingTop: '7px' }}>New Orders</span>
            </Link>
          </li>
               <li className="nav-item" style={{ listStyle: 'none',width:'100px' }}>
          <Link to="/order" style={{ color: 'black', fontSize: '15px', textDecoration: 'none',  }}>
              <span style={{ paddingTop: '7px' }}> All Orders</span>
            </Link>
          </li>
      </Stack>
    </ul>
  )}
</span>
         
          <li className="nav-item" >
            <Link
              to="/account"
              className={`nav-link ${clickedLink === "/account" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>Profile</span>
            </Link>
          </li>

          <li className="nav-item" style={{  marginRight: '12px' }}>
            <Link
              className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle, textDecoration: 'none' }}
              onClick={() => handleLinkClick()}
            >
              <span style={{ paddingTop: '7px' }}>Logout</span>
            </Link>
          </li>
        </ul>
        </Stack>
       
      </nav>

     
    </div>
  );
};

export default Navbar;
