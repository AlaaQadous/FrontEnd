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
const logoStyle = { width: '120px', height: '100px', paddingLeft: '20px' };
const linkStyle = { color: 'black' };
const buttonStyle = { backgroundColor: 'white', border: 'none' };
const verticalNavStyle = {
  padding: '20px',
  borderRight: '3px solid #cac8c8',
  paddingRight: '10px',
  width: '200px',
  height: '100vh',
  position: 'fixed',
};
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
      <nav className="d-flex justify-content-between" >
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <ul className="nav">
          <li className="nav-item">
            <button style={buttonStyle}>
              <span
                className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
                style={{ ...linkStyle, textDecoration: 'none', color: 'black',fontSize: '20px' }}
                onClick={() => handleLinkClick()}
              >
                Logout
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="virtical-nav" style={verticalNavStyle}>
        <ul className="nav flex-column">
          <li className="nav-item" style={{ marginBottom: '15px', textAlign: 'center', marginTop: '15px', }}>
            <img className="rounded-circle mt-3" width="90px" src={ima} alt="Profile" style={{ marginTop: '3px' }} />
          </li>
          <li className="nav-item">
            <Link
              to="/customer"
              className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black',fontSize: '20px' }}
            
            >
              <span style={{ paddingTop: '7px' }}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/orders"
              className={`nav-link ${clickedLink === "/orders" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black' ,fontSize: '20px'}}
    
            >
              <span style={{ paddingTop: '3px' }}>Orders</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={`nav-link ${clickedLink === "/profile" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black',fontSize: '20px' }}
             
            >
              <span style={{ paddingTop: '3px' }}>Profile</span>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
