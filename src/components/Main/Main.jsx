import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom';

import Search from './Search/Search'

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import Form from './Form/Form';

const Main = () => {

  const [data, setData] = useState('');


  const handleForm = (e) =>{
    e.preventDefault();
    //console.log(e.target.pokemon.value);
    setData(e.target.pokemon.value);
    e.target.pokemon.value = '';
  }

  return <main>
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/pokemon/:id" element={<Details/>} />
        <Route path="/search" element={<Search data={data} onSubmit={handleForm}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      
      </Routes>


  </main>;
};

export default Main;
