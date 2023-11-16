import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './customer/image/l.png';
import Image1 from './customer/image/alaa.jpg';
import './navb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
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
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };

  return (
    <div>
      <nav className="d-flex justify-content-between" >
        <div>
          <img src={Image} alt="Your Logo" style={logoStyle} />
        </div>
        <ul className="nav">
          <li className="nav-item">
            <button style={buttonStyle}>
              <Link
                to="/logout"
                className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
                style={{ ...linkStyle, textDecoration: 'none', color: 'black' }}
                onClick={() => handleLinkClick("/logout")}
              >
                Log out
              </Link>
            </button>
            <button style={buttonStyle}>
              <Link
                to="/login"
                className={`nav-link ${clickedLink === "/logout" ? 'clicked' : ''}`}
                style={{ ...linkStyle, textDecoration: 'none', color: 'black' }}
                onClick={() => handleLinkClick("/logout")}
              >
                Login
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      <div className="virtical-nav" style={verticalNavStyle}>
        <ul className="nav flex-column">
          <li className="nav-item" style={{ marginBottom: '15px', textAlign: 'center', marginTop: '15px', }}>
            <img className="rounded-circle mt-3" width="90px" src={Image1} alt="Profile" style={{ marginTop: '3px' }} />
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black' }}
              onClick={() => handleLinkClick("/")}
            >
              <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '5px' }} />
              <span style={{ paddingTop: '7px' }}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/orders"
              className={`nav-link ${clickedLink === "/orders" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black' }}
              onClick={() => handleLinkClick("/orders")}
            >
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
              <span style={{ paddingTop: '3px' }}>Orders</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={`nav-link ${clickedLink === "/profile" ? 'clicked' : ''}`}
              style={{ ...linkStyle, color: 'black' }}
              onClick={() => handleLinkClick("/profile")}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
              <span style={{ paddingTop: '3px' }}>Profile</span>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
