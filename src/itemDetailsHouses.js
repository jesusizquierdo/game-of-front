import React, {useState, useEffect} from 'react';
import './App.css';

import { useTranslation } from 'react-i18next';


function ItemDetailHouses({ match }) {
  const detailsHouses = match.params.id;

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://api.got.show/api/show/houses/${detailsHouses}`);
      const item = await fetchItem.json();
      setItem(item);
  } 

  useEffect(() => {
    fetchItem();
    },[fetchItem, match]);

    const [item, setItem] = useState({});
    console.log(item);

    const { t } = useTranslation();

  return (
    <div className="container-fluid" className="b-characters__background" >

      <img className="b-gallery__details" src={item.logoURL} alt=" " key={item.logoURL}></img>
        <h2 className="b-characters__font">{item.name}</h2> 
        
        <div className="col-sm-6 col-md-2 col-lg-1" className="b-characters__font">

          <h4>{t('Character.1')}</h4>

          <h4>{t('Character.2')}</h4>

          <h4>{t('Character.3')}</h4>

          <h4>{t('Character.4')}</h4>

          <h4>{t('Character.5')}</h4>

          <h4>{t('Character.6')}</h4>

        </div>

        <div className="col-sm-6 col-md-2 col-lg-1" className="b-characters__font--text">

         {/*<img src={item.logoURL} key={item.logoURL} alt="house" width={180} height={220}></img>*/}
          
         <p className="b-characters__font--space">{item.logoURL}</p>
          
          <p className="b-characters__font--space">{item.allegiances}</p>

          <p className="b-characters__font--space">{item.appearances}</p>

          <p className="b-characters__font--space">{item.father}</p>

          <p className="b-characters__font--space">{item.siblings}</p>

          <p className="b-characters__font--space">{item.titles}</p>



        </div>

    </div>
  );
}




export default ItemDetailHouses;