import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { newContext } from '../../../context/newContext';



const Form = () => {
  const { setNewPokemon} = useContext(newContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const id = data.id
    const name= data.name
    const front_default = data.image
    const typeOne = data.typeOne
    const typeTwo = data.typeTwo

    const newPokemons = {
      id,
      name,
      sprites: {front_default}, 
      typeOne,
      typeTwo
    }
    if(typeOne!==typeTwo){
      setNewPokemon(pokemon => pokemon.concat(newPokemons));
      alert('Pokemon added successfully');
    
    }else{
      alert('Pokemon cannot have the same type twice');
    }
    
  }



  return <>
  <h2>Create Pokemons</h2>

    <form onSubmit={handleSubmit(onSubmit)} className='container-form'>
      <input type="number" placeholder='Id'{...register("id",{ required: true, message: "error message"})} />
      <input placeholder='Name' {...register("name",{ required: true , minLength: 3,  message: "error message"})} />
      <input placeholder='Image' {...register("image",{ required: true , message: "error message"})} />
      <select {...register("typeOne",{ required: true , message: "error message"})}>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
      </select>
      <select {...register("typeTwo")}>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
      </select>
      <input type="submit" />
    </form>



</>;
};

export default Form;
