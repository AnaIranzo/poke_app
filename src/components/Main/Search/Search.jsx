import React, { useContext } from 'react';
import Card from './Card/Card'
import {listContext} from '../../../context/listContext';
import { v4 as uuidv4 } from 'uuid';

//https://pokeapi.co/api/v2/pokemon/pikachu
const Search = (props) => {


  const {pokemonData} = useContext(listContext);

  return <div className="form-container">
    <h2>Busca un pokemon</h2>
    <form onSubmit={props.onSubmit}>
      <input type="text" name="pokemon"/>
      <input type="submit" value="Buscar" />
    </form>
    <Card data={pokemonData} key={uuidv4()}/>
  </div>;
};

export default Search;
