import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navb.css';
import { useDispatch } from "react-redux";
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { api } from "../../utiltis/apis";
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
        <ul className="nav">
        <li className="nav-item" style={{ marginRight: '12px' }}>
            <button style={buttonStyle}>
              <span
                className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
                style={{ ...linkStyle, textDecoration: 'none', color: 'black', fontSize: '20px' }}
                onClick={() => handleLinkClick()}
              >
                Logout
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <div className="vertical-nav" style={verticalNavStyle}>
        <ul className="nav flex-column">
          <li className="nav-item" style={{ alignItems: 'center', marginTop: '20px', marginLeft: "27px" }}>
          <img
  className="rounded-circle mt-3"
  width="90px"
  src={ima}
  alt="Profile"
  style={{ marginTop: '3px', borderRadius: '50%' }}
/>

          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
              style={{ ...linkStyle, fontSize: '20px' }}

            >
              <span>News</span>
            </Link>
          </li>

          <span onClick={handleOrderClick} style={{ cursor: 'pointer', fontSize: '20px', marginLeft: "24px", marginBottom: '3px' }}>Order</span>
          {isOrderVisible && (
            <ul>
              <li className="nav-item" style={{ listStyle: 'none' }}>
                <Link
                  to="/ord"
                  className={`nav-link ${clickedLink === "/orders" ? 'clicked' : ''}`}
                  style={{ ...linkStyle, color: 'black', fontSize: '15px' }}
                >
                  <span>New Orders</span>
                </Link>
              </li>
              <li className="nav-item" style={{ listStyle: 'none' }}>
                <Link
                  to="/ready"
                  className={`nav-link ${clickedLink === "/ready" ? 'clicked' : ''}`}
                  style={{ ...linkStyle, color: 'black', fontSize: '15px' }}
                >
                  <span>Ready Orders</span>
                </Link>
              </li>
            </ul>
          )}
          <li className="nav-item">
            <Link
              to="/manage"
              className={`nav-link ${clickedLink === "/manage" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black', fontSize: '20px', marginTop: "4px" }}
            >
              <span>Accounts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myfro"
              className={`nav-link ${clickedLink === "/myfro" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black', fontSize: '20px', marginTop: "4px" }}
            >
              <span>Profile</span>
            </Link>
          </li>


        </ul>
      </div>
    </div>
  );
};

const navv = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: 'white',
  zIndex: '1000',
  borderBottom: '3px solid #ccc',


};

const logoStyle = {
  width: '120px',
  height: '100px',
  paddingLeft: '20px',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',
};

const buttonStyle = {
  backgroundColor: 'white',
  border: 'none',
  marginTop: '30px', // Add this line to adjust the position
};


const verticalNavStyle = {
  padding: '20px',
  borderRight: '3px solid #cac8c8',
  paddingRight: '10px',
  width: '200px',
  height: '100vh',
  position: 'fixed',
  top: '70px',
};

export default Navbarr;
