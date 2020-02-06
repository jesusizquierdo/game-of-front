import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail({ match }) {
  const details = match.params.id;

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://api.got.show/api/show/houses=${details}`);
      const item = await fetchItem.json();
      setItem(item);
  } 

  useEffect(() => {
    fetchItem();
    },[fetchItem, match]);

    const [item, setItem] = useState({});
    console.log(item);

  return (
    <div>
    <img src={item.image} alt=" " key={item.image}></img>
        <h4>{item.name}</h4> 
        
        <h4>CASA</h4>
            <img src={item.logoURL} key={item.logoURL} alt="house" width={180} height={220}></img>

        <h4>ALIANZAS</h4>
            <p>{item.allegiances}</p>

        <h4>APARICIONES</h4>
            <p>{item.appearances}</p>
    </div>
  );
}




export default ItemDetail;
