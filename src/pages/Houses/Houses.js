import React, {useState, useEffect} from 'react';
import '../../App.css';
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
    <div>
      {items.map(item => (
        <figure>
          <Link to={`/houses/${item.itemid}`}> {item.name}
          <img src={item.logoURL} key={item.logoURL}/>
          <h4 key={item.id}> {item.name}</h4>
          </Link>
        </figure>
      ))}
    </div>
  );
}

export default Houses;