import React, {   useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {listContext} from '../../../../context/listContext';
import Listcard from './ListCard/ListCard';

const ListaPokemon = () => {

  const {pokemonData} = useContext(listContext);
  console.log(pokemonData);

  return <div className="list-container">
    <h2>Pokemon buscados</h2>
    {pokemonData.map(pokemon => <Listcard data={pokemon} key={uuidv4()}/>)}

  </div>;
};

export default ListaPokemon;
