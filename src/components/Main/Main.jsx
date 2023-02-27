import React, { useEffect, useState, useContext } from 'react';
import {Routes,Route} from 'react-router-dom';
import axios from 'axios';

import Search from './Search/Search'

import ListaPokemon from './ListaPokemon/ListaPokemon';
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import Form from './Form/Form';
import { listContext } from '../../context/listContext';

const Main = () => {

  const [data, setData] = useState('');
  //const [pokemonData, setPokemonData] = useState([]);
  const {setPokemonData} = useContext(listContext);

  useEffect(()=> {
    async function getData(){
      if (data !== '') {
        try {
        
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
          const json = response.data
          
          //console.log(json);
          //setPokemonData(json)
  
          if (json.name) {
            setPokemonData(pokemon => pokemon.concat(json));
          }
          
        } catch (error) {
  
          setPokemonData({})
        }
      }
      
    }
    getData()
  },[data]);

  const handleForm = (e) =>{
    e.preventDefault();
    //console.log(e.target.pokemon.value);
    setData(e.target.pokemon.value);
    e.target.pokemon.value = '';
  }

  return <main>
      <Routes>
    
        <Route path="/" element={<ListaPokemon />}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/pokemon/:id" element={<Details/>} />
        <Route path="/search" element={<Search onSubmit={handleForm}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      
      </Routes>


  </main>;
};

export default Main;
