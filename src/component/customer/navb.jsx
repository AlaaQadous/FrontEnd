import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import './navb.css';
import { useDispatch } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from "react-redux";
import { api } from "../../utiltis/apis";
import {Stack } from '@mui/material';

const logoStyle = { width: '120px', height: '100px', paddingLeft: '20px', paddingRight:'5px' };
const buttonStyle = {  border: 'none' };

const Navbar = () => {
  const dispatch = useDispatch();
  const [clickedLink, setClickedLink] = useState(null);

  const navigate = useNavigate();
  const handleLinkClick = () => {
    dispatch(logOut())
    return navigate("/login")
  };
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
  return (
    <div>
      <nav className="d-flex justify-content-between"  style={  {background:'#f5f5f5'}
}>
 
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <Stack direction='row'>
  <ul className="nav" style={{ listStyleType: 'none', padding: '0' }}>
    <li className="nav-item">
      <Link
        to="/customer"
        className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
        style={{  listStyleType: 'none',color: 'black',fontSize: '20px' }}
      >
        <span style={{ paddingTop: '7px' }}>Dashboard</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/orders"
        className={`nav-link ${clickedLink === "/orders" ? 'clicked' : ''}`}
        style={{ color: 'black' ,fontSize: '20px'}}
      >
        <span >Orders</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/profile"
        className={`nav-link ${clickedLink === "/profile" ? 'clicked' : ''}`}
        style={{ textDecoration: 'none', color: 'black',fontSize: '20px' }}
      >
        <span >Profile</span>
      </Link>
    </li>
  </ul>
  <ul className="nav" style={{ listStyleType: 'none', padding: '0' }}>
    <li className="nav-item">
      <button style={buttonStyle}>
        <span
          className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
          style={{  textDecoration: 'none', color: 'black',fontSize: '20px' }}
          onClick={() => handleLinkClick()}
        >
          Logout
        </span>
      </button>
    </li>
  </ul>
</Stack>

      </nav>

    
    </div>
  );
};

export default Navbar;
