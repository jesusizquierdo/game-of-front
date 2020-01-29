import React from 'react';
import './App.css';
import Spain from'./images/spain-flag.jpg';
import Uk from './images/uk-flag.jpg';
import IconHome from './images/house.png';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';



function Nav() {
  
    const navStyle = {
        color: 'white'
    };
  
    const { i18n } = useTranslation();

  function handleClick(lang) {
  i18n.changeLanguage(lang);
  console.log(lang)
  }

    return (
    <div className="nav">
        <ul className="nav-links">
            <Link to="/"><li><img src={IconHome} alt="Home"/></li></Link>
            <span className="text-hide">:
            </span>
            <li onClick={() => handleClick('es')}><img src={Spain} alt="Spanish"/></li>
            <span className="text-hide">::
            </span>
            <li onClick={() => handleClick('en')}><img src={Uk} alt="English"/></li>
        </ul>
    </div>
  );
}

export default Nav;
