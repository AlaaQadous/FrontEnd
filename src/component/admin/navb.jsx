import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './image/l.png';
import Image1 from './image/alaa.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navb.css';

const Navbarr = () => {
    const [clickedLink, setClickedLink] = useState(null);

    const handleLinkClick = (link) => {
        setClickedLink(link);
    };

    return (
        <div>
            <nav className="d-flex justify-content-between" style={navv}>
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
                    </li>
                </ul>
            </nav>

            <div className="vertical-nav" style={verticalNavStyle}>
                <ul className="nav flex-column">
                    <li className="nav-item text-center mb-4 mt-3">
                        <img className="rounded-circle" width="90px" src={Image1} alt="Profile" />
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={`nav-link ${clickedLink === "/" ? 'clicked' : ''}`}
                            style={{ ...linkStyle }}
                            onClick={() => handleLinkClick("/")}
                        >
                            <span>News</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/orders"
                            className={`nav-link ${clickedLink === "/orders" ? 'clicked' : ''}`}
                            style={{ ...linkStyle, color: 'black' }}
                            onClick={() => handleLinkClick("/orders")}
                        >
                            <span>New Orders</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/ready"
                            className={`nav-link ${clickedLink === "/ready" ? 'clicked' : ''}`}
                            style={{ ...linkStyle, color: 'black' }}
                            onClick={() => handleLinkClick("/ready")}
                        >
                            <span>Ready Orders</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/manage"
                            className={`nav-link ${clickedLink === "/manage" ? 'clicked' : ''}`}
                            style={{ ...linkStyle, color: 'black' }}
                            onClick={() => handleLinkClick("/manage")}
                        >
                            <span>Management</span>
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
