import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import './navb.css';
import { useDispatch } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

const logoStyle = { width: '120px', height: '100px', paddingLeft: '20px' };
const verticalNavStyle = {
  padding: '20px',
  borderRight: '3px solid #cac8c8',
  paddingRight: '10px',
  width: '200px',
  height: '100vh',
  position: 'fixed',
};

const commonLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '20px', // يمكنك تعديل القيمة حسب احتياجاتك

};

const Navbar = () => {
  const [clickedLink, setClickedLink] = useState(null);

  
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLinkClick = () => {
    dispatch(logOut())
    return navigate("/login")
  };
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between'  }}>
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <ul className="nav" style={{ listStyleType: 'none', padding: '0' }}>
        <li className="nav-item" style={{ marginTop:'20px' , marginRight :'12px'}}>
            <span
            
              className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle,textDecoration: 'none' }}
              onClick={() => handleLinkClick()}
            >
              <span style={{ paddingTop: '7px' }}>Logout</span>
            </span>
          </li>
        </ul>
      </nav>

      <div className="virtical-nav" style={verticalNavStyle}>
        <ul className="nav flex-row" style={{ listStyleType: 'none', padding: '0' }}>
          <li className="nav-item" style={{ alignItems: 'center', marginTop:'50px' }}>
            <img
              className="rounded-circle mt-3"
              width="90px"
              src={Image1}
              alt="Profile"
              style={{ marginTop: '3px', borderRadius: '50%' }}
            />
          </li>
          <li className="nav-item" style={{ marginTop:'30px'}}>
            <Link
              to="/employee"
              className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>New Orders</span>
            </Link>
          </li>
          <li className="nav-item" style={{ marginTop:'10px'}}>
            <Link
              to="/order"
              className={`nav-link ${clickedLink === "/order" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>Orders</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
