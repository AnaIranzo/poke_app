import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Card from './Card/Card'

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
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


  console.log(pokemons);


  return <div>

{pokemons.map(pokemon => <Card data={pokemon} key={uuidv4()}/>)}
  </div>;
};

export default Home;
