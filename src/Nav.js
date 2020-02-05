import React from 'react';
import './App.scss';
import Spain from'./images/spain-flag.jpg';
import Uk from './images/uk-flag.jpg';
import IconHome from './images/house.png';
import Search from './images/search.png';

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
    <div className="b-nav">
      <div className="b-nav__buscador">
          <input className="b-nav__buscador input" type="text" placeholder="Buscar"></input>
          <button className="b-nav__buscador button" type="submit"><img src={Search} alt="search"/></button>

        </div>
        <ul className="b-nav__links">
            <Link to="/"><li><img src={IconHome} alt="Home"/></li></Link>
            <span className="c-text__hide">:
            </span>
            <li onClick={() => handleClick('es')}><img src={Spain} alt="Spanish"/></li>
            <span className="c-text__hide">::
            </span>
            <li onClick={() => handleClick('en')}><img src={Uk} alt="English"/></li>
        </ul>
      
    </div>
  );
}

export default Nav;
