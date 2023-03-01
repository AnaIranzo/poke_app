import React, {  useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { listContext } from "./context/listContext";
import { newContext } from "./context/newContext";


function App() {

  //const [data, setData] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [newPokemon, setNewPokemon] = useState([]);


  const pokemonList = {
    pokemonData,
    setPokemonData
  }

  const newPokemonList = {
    newPokemon,
    setNewPokemon
  }


  return (
    <div className="App">
    <BrowserRouter>
      <listContext.Provider value={pokemonList}>
      <newContext.Provider value={newPokemonList}>

      <Header />
      <Main/>
      </newContext.Provider>
      </listContext.Provider>

    </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
