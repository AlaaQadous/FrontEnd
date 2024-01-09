import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import './navb.css';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { api } from "../../utiltis/apis";

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
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <ul className="nav" style={{ listStyleType: 'none', padding: '0' }}>
          <li className="nav-item" style={{ marginTop: '10px', marginRight: '12px' }}>
            <Link
              className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle, textDecoration: 'none' }}
              onClick={() => handleLinkClick()}
            >
              <span style={{ paddingTop: '7px' }}>Logout</span>
            </Link>
          </li>
         
        </ul>
      </nav>

      <div className="virtical-nav" style={verticalNavStyle}>
        <ul className="nav flex-row" style={{ listStyleType: 'none', padding: '0' }}>
          <li className="nav-item" style={{ alignItems: 'center', marginTop: '20px', marginLeft: "27px" }}>
          <img
  className="rounded-circle mt-3"
  width="90px"
  src={ima}
  alt="Profile"
  style={{ marginTop: '3px', borderRadius: '50%' }}
/>

          </li>
          <li className="nav-item" style={{ marginTop: '30px' }}>
            <Link
              to="/employee"
              className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>New Orders</span>
            </Link>
          </li>
          <li className="nav-item" style={{ marginTop: '2px' }}>
            <Link
              to="/order"
              className={`nav-link ${clickedLink === "/order" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>Orders</span>
            </Link>
          </li>
          <li className="nav-item" style={{ marginTop: '2px' }}>
            <Link
              to="/account"
              className={`nav-link ${clickedLink === "/account" ? 'clicked' : ''}`}
              style={{ ...commonLinkStyle }}
            >
              <span style={{ paddingTop: '7px' }}>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
