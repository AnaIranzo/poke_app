import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { listContext } from '../../../context/listContext';



const Form = () => {
  const { setPokemonData} = useContext(listContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const id = data.id
    const name= data.name
    const front_default = data.image
    const typeOne = data.typeOne
    const typeTwo = data.typeTwo

    const newPokemon = {
      id,
      name,
      sprites: {front_default}, 
      typeOne,
      typeTwo
    }
    setPokemonData(pokemon => pokemon.concat(newPokemon));
  }

/* const handleForm = (e) => {
  e.preventDefault();

    const id =e.target.id.value
    const name= e.target.name.value
    const front_default = e.target.image.value

    let typeOne
    for (let i = 0; i < 17; i++) {
      if (e.target.typeOne[i].selected === true) {
        typeOne = e.target.typeOne[i].value
        break
      }
    }
    let typeTwo
    for (let i = 0; i < 17; i++) {
      if (e.target.typeTwo[i].selected === true) {
        typeTwo = e.target.typeTwo[i].value
        break
      }
    }

  

 

} */
  return <>
  <h2>Create Pokemons</h2>

    <form onSubmit={handleSubmit(onSubmit)} className='container-form'>
      <input type="number" placeholder='Id'{...register("id",{ required: true, min:2000})} />
      <input placeholder='Name' {...register("name",{ required: true , minLength: 3})} />
      <input placeholder='Image' {...register("image",{ required: true})} />
      <select {...register("typeOne")}>
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
