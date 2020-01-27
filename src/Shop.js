import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
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
    <div>
      {items.map(item => (
        <figure>
          <Link to={`/shop/${item.itemid}`}> {item.name}
          <img src={item.image} key={item.image}/>
          <h4 key={item.id}> {item.name}</h4>
          </Link>
        </figure>
      ))}
    </div>
  );
}

export default Shop;
