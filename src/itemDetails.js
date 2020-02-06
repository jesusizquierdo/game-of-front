import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail({ match }) {
  const details = match.params.id;

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://api.got.show/api/show/characters/${details}`);
      const item = await fetchItem.json();
      setItem(item);
  } 

  useEffect(() => {
    fetchItem();
    },[fetchItem, match]);

    const [item, setItem] = useState({});
    console.log(item);

  return (
    <div className="container-fluid" className="app">

      <img className="b-gallery__details" src={item.image} alt=" " key={item.image}></img>
        <h4 className="b-characters__font">{item.name}</h4> 
        
        <div className="col-sm-6 col-md-2 col-lg-1" className="b-characters__font">

          {/*<h4>CASA</h4>*/}

          <h4>ALIANZAS</h4>

          <h4>PADRE</h4>

          <h4>DESCENDIENTES</h4>

          <h4>TÍTULOS</h4>

        </div>

        <div className="col-sm-6 col-md-2 col-lg-1" className="b-characters__font--text">

         {/*<img src={item.logoURL} key={item.logoURL} alt="house" width={180} height={220}></img>*/}
          
          <p className="b-characters__font--space">{item.allegiances}</p>

          <p className="b-characters__font--space">{item.father}</p>

          <p className="b-characters__font--space">{item.siblings}</p>

          <p className="b-characters__font--space">{item.titles}</p>



        </div>

    </div>
  );
}




export default ItemDetail;
