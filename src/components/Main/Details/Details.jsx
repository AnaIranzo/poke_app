import React from "react";
import { useParams } from 'react-router-dom';

const Details = () => {
  
  const {id, name, typeOne, typeTwo, image} = useParams();



  const detailedPokemon ={
    id,
    name,
    typeOne,
    typeTwo,
    image
  }




  return <section className="home-container">
    {detailedPokemon ? <article className="card-container"><img src={image} alt=""  />
    <p>{detailedPokemon.name}</p>
    <p>Nº {detailedPokemon.id}</p>
    {detailedPokemon.typeTwo !== '' ? <p>Types: {typeOne}, {typeTwo}</p> : <p>Type: {typeOne} </p> }
    </article> :''} 

  </section>;
};

export default Details;
