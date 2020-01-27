import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() =>  {
      fetchItem();
  }, []);

  const [item, setItem] = useState({
      images: {}
  });

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://api.got.show/api/show/characters=${match.param.id}`);
      const item = await fetchItem.json();
  } 

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt=""></img>
    </div>
  );
}

export default ItemDetail;
