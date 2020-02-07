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
    <div className="b-footer">
        <ul className="b-footer__links">
            <Link style={footerStyle} to='/characters'>
            <li><h2>{t('Nav.1')}</h2></li>
            </Link>
            <Link style={footerStyle} to='/houses'>
            <li><h2>{t('Nav.2')}</h2></li>
            </Link>
            <Link style={footerStyle} to='/chronology'>
            <li><h2>{t('Nav.3')}</h2></li>
            </Link>
        </ul>
    </div>
  );
}

export default Footer;