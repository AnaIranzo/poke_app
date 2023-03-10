import React, { useContext, useEffect } from 'react';
import {listContext} from '../../../context/listContext';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import ListaPokemon from './ListaPokemon/ListaPokemon';

//https://pokeapi.co/api/v2/pokemon/pikachu
const Search = (props) => {

  const {pokemonData, setPokemonData} = useContext(listContext);
  

  useEffect(()=> {
    const  getData = async () =>{

      if (props.data !== '') {
        const pokeRepeat = pokemonData.map(pokemon => pokemon.name.includes(props.data.toLowerCase()))

      if (props.data !== '' && !pokeRepeat.includes(true)) {
        try {
        
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.data.toLowerCase()}`);
          const json = response.data
          
          console.log(json);
          
  
          if (json.name) {
            setPokemonData(pokemon => pokemon.concat(json));
          }
          
        } catch (error) {
        }
      }
      }
      
    }
    getData();
    // eslint-disable-next-line
  },[props.data]);
  
  return <div className="search-container">
    <h2>Catch wild Pokémon</h2>
  
      <input type="text" name="pokemon" onChange={props.onSubmit}/>
      
  
    <ListaPokemon data={pokemonData} key={uuidv4()} />
  </div>;
};

export default Search;
