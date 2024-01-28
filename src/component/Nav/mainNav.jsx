import React, { useState, useEffect } from 'react';
import './mainNav.css';
import Image from '../image/l.png';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const logoStyle = { width: '120px', height: '100px', paddingLeft: '20px' };
const buttonStyle = { border: 'none' };

function Navbar() {
  
const fontCursive = { fontFamily: 'Pacifico, cursive' }; 


  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };

  return (
    <>
    <nav className="d-flex justify-content-between" style={{  background:'#f5f5f5'}}>
      <div>
        <img src={Image} alt="Your Logo" style={logoStyle} />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <button style={buttonStyle}>
            <Link
              to="/home"
              className={`nav-link ${clickedLink === "/home" ? 'clicked' : ''}`}
              style={{ textDecoration: 'none', color: 'black', ...fontCursive , fontSize:'20px'}}
              onClick={() => handleLinkClick("/home")}
            >
              <span>Home</span>
            </Link>
          </button>
        </li>
        <li className="nav-item">
          <button style={buttonStyle}>
            <Link
              to="/login"
              className={`nav-link ${clickedLink === "/login" ? 'clicked' : ''}`}
              style={{ textDecoration: 'none', color: 'black', ...fontCursive, fontSize:'20px' }}
              onClick={() => handleLinkClick("/login")}
            >
              <span>Login</span>
            </Link>
          </button>
        </li>
      </ul>
    </nav>
    </>
    
  );
}

export default Navbar;
