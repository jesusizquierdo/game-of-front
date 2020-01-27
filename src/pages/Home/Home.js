import React from 'react';
import './Home.css';

import { useTranslation } from 'react-i18next';


function Home() {

  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className="Home__text">
        <h1>{t('Title.1')}</h1>
      </div>
    </div>
  )
  }
  export default Home;
  