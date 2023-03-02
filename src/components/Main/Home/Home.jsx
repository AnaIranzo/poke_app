import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { newContext } from '../../../context/newContext';

import Card from './Card/Card'

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const { newPokemon} = useContext(newContext);


  useEffect(()=> {
    const  getPokemons = async () =>{
        
        try {
        
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
          const json = response.data
          
          const urls = json.results.map(pokemon => pokemon.url)

          axios.all(urls.map((endpoint) => axios.get(endpoint))).then(
            (data) => setPokemons(data),
          );
        } catch (error) {
  
          setPokemons({})
        
      }
      }
      getPokemons();
    // eslint-disable-next-line
  },[]);





  return <div className='home-container'>
<h1>PokéApp</h1>
{newPokemon.map(pokemon => <Card newData={pokemon} key={uuidv4()}/>)}
{pokemons.map(pokemon => <Card data={pokemon} key={uuidv4()}/>)}
  </div>;
};

export default Home;
