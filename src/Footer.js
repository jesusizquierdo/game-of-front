import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
  
    const footerStyle = {
        color: 'white'
    };
  
  
    return (
    <div className="footer">
        <ul className="footer-links">
            <Link style={footerStyle} to='/about'>
            <li>Houses</li>
            </Link>
            <Link style={footerStyle} to='/shop'>
            <li>Characters</li>
            </Link>
        </ul>
    </div>
  );
}

export default Footer;