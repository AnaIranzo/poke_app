import React from "react";
import { useParams } from 'react-router-dom';

const Details = () => {
  console.log(useParams());
  const {id, name, typeOne, typeTwo, image} = useParams();

//image = decodeURIComponent(encodedURL.uriFull)
console.log(image);

  const detailedPokemon ={
    id,
    name,
    typeOne,
    typeTwo,
    image
  }


//console.log(decodeURIComponent(encodedURL.uriFull))

  return <div>
    {detailedPokemon ? <><img src={image} alt=""  />
    <p>{detailedPokemon.name}</p>
    <p>Nº {detailedPokemon.id}</p>
    {detailedPokemon.typeTwo !== '' ? <p>Types: {typeOne}, {typeTwo}</p> : <p>Type: {typeOne} </p> }
    </> :''} 

  </div>;
};

export default Details;
