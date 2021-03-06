import React, {useState, useEffect} from 'react';
import '../../App.scss';
import '../../pages/Characters/Characters.scss';

import {Link} from 'react-router-dom';

function Characters() {
  useEffect (() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.got.show/api/show/characters'
      );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
  <div className="container-fluid" className="b-characters__background">
      <div className="row" >
    
      {items.map(item => (
        <figure className="col-sm-12 col-md-4 col-lg-1">
          <Link to={`/characters/${item.name}`}>
          <img className="b-gallery img-fluid" src={item.image} key={item.image}/>
          <figcaption key={item.id}> <h5 className="b-characters__font">{item.name}</h5></figcaption>
          </Link>
        </figure>
      ))}
    </div>
  </div>
  );
}

export default Characters;
