import React, {useState, useEffect} from 'react';
import '../../App.scss';
import {Link} from 'react-router-dom';
import '../../pages/Houses/Houses.scss';

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
          <Link to={`/houses/${item.itemid}`}> {item.name}
          <img className="b-gallery" src={item.logoURL} key={item.logoURL}/>
          <h4 key={item.id}> {item.name}</h4>
          </Link>
        </figure>
      ))}
      </div>
    </div>
  );
}

export default Houses;