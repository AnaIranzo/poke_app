import React, { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';
import Form from './Form/Form'
import Card from './Card/Card'
import ListaPokemon from './ListaPokemon/ListaPokemon';

const Main = () => {

  const [data, setData] = useState('');
  const [pokemonData, setPokemonData] = useState([])

  useEffect(()=> {
    async function getData(){
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
        const json = response.data
        console.log(response);
        console.log(json);
        //setPokemonData(json)

        if (json.name) {
          setPokemonData(pokemon => pokemon.concat(json))
        }
        
      } catch (error) {

        setPokemonData({})
      }
    }
    getData()
  },[data]);
  console.log('**',pokemonData);

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(e.target.pokemon.value);
    setData(e.target.pokemon.value);
    e.target.pokemon.value = ''
  }

  return <main>
      <Routes>
    
        <Route path="/form" element={<><Form onSubmit={handleForm}/><Card data={pokemonData}/><ListaPokemon data={pokemonData}/></>}/>
        {/* <Route path="/card" element={<ListaPokemon data={pokemonData}/>}/>  */}
      
      </Routes>


  </main>;
};

export default Main;
