import React, { useState, useCallback } from 'react';
import {Routes,Route} from 'react-router-dom';
import debounce from 'lodash.debounce';

import Search from './Search/Search'
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import Form from './Form/Form';

const Main = () => {

  const [data, setData] = useState('');


  const handleForm = (e) =>{
    console.log(e.target.value);
    setData(e.target.value);
    e.target.value = ''; 
  }

// eslint-disable-next-line
  const debouncedChangeHandler = useCallback(
    debounce(handleForm, 1500)
  , []);

  return <main>
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/pokemon/:id/:name/:typeOne/:typeTwo/:image"  element={<Details/>} />
        <Route path="/search" element={<Search data={data} onSubmit={debouncedChangeHandler}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      
      </Routes>


  </main>;
};

export default Main;
