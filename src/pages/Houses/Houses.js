import React, {useState, useEffect} from 'react';
import '../../App.scss';
import '../../pages/Houses/Houses.scss';

import {Link} from 'react-router-dom';

function Houses() {
  useEffect (() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.got.show/api/show/houses'
      );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
  <div className="container-fluid ">
      <div className="row">
    
      {items.map(item => (
        <figure className="col-sm-12 col-md-4 col-lg-1">
          <Link to={`/characters/${item.id}`}>
          <img className="b-gallery img-fluid" src={item.logoURL} key={item.logoURL} width={180} height={220}/>
          <figcaption key={item.id}> {item.name}</figcaption>
          </Link>
        </figure>
      ))}
    </div>
  </div>
  );
}

export default Houses;
