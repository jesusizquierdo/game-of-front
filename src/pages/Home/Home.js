import React from 'react';
import './Home.scss';

import { useTranslation } from 'react-i18next';


function Home() {

  const { t } = useTranslation();

  return (
    <div className="b-home">
      <div className="b-home__title">
        <h1>{t('Title.1')}</h1>
      </div>
    </div>
  )
  }
  export default Home;
  