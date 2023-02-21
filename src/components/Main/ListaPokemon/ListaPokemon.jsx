import React from "react";

const ListaPokemon = (props) => {

  //console.log(props.data);
  return <div className="list-container">
    <h2>Pokemon buscados</h2>
    {props.data.map(pokemon => <>
    <img src={pokemon.sprites.front_default} alt=""  />
    <p>{pokemon.name}</p>
    <p>Nº {pokemon.id}</p>
    
    </>)}
  </div>;
};

export default ListaPokemon;
