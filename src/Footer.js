import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function Footer() {
  
    const footerStyle = {
        color: 'white'
    };
  
    const { t } = useTranslation();

    return (
    <div className="footer">
        <ul className="footer-links">
            <Link style={footerStyle} to='/characters'>
            <li>{t('Nav.1')}</li>
            </Link>
            <Link style={footerStyle} to='/houses'>
            <li>{t('Nav.2')}</li>
            </Link>
            <Link style={footerStyle} to='/chronology'>
            <li>{t('Nav.3')}</li>
            </Link>
        </ul>
    </div>
  );
}

export default Footer;