import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  console.log(useParams());
  const {id} = useParams();
  const [pokemonDetail, setPokemonDetail] = useState('');


  


  useEffect(()=> {
    async function getData(){
      if (id !== '') {
        try {
        
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const json = response.data
          
          console.log(json);
          //setPokemonData(json)
  
          if (json.name) {
            setPokemonDetail(json);
          }
          
        } catch (error) {
  
          setPokemonDetail({})
        }
      }
      
    }
    getData()
  },[id]);

  let typeOne
  let typeTwo

  if (pokemonDetail) {
    let types = pokemonDetail.types.length
  console.log(types);
 
  if (types === 1) {
    typeOne = pokemonDetail.types[0].type.name
    
  }else{
    typeOne = pokemonDetail.types[0].type.name
    typeTwo = pokemonDetail.types[1].type.name
  } 
  }
  

  return <div>
    {pokemonDetail ? <><img src={pokemonDetail.sprites.front_default} alt=""  />
    <p>{pokemonDetail.name}</p>
    <p>Nº {id}</p>
    <p>Types: {typeOne} {typeTwo}</p> 
    </> :''} 

  </div>;
};

export default Details;
