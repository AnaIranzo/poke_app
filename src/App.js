import React, {  useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import { listContext } from "./context/listContext";

function App() {

  //const [data, setData] = useState('');
  const [pokemonData, setPokemonData] = useState([]);

  const pokemonList = {
    pokemonData,
    setPokemonData
  }



  return (
    <div className="App">
    <BrowserRouter>
      <listContext.Provider value={pokemonList}>
      <Header />
      <Main/>
      </listContext.Provider>
    </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
