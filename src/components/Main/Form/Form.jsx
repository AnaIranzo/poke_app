import React, { useContext } from 'react';

import { listContext } from '../../../context/listContext';



const Form = () => {
  const { setPokemonData} = useContext(listContext);


const handleSubmit = (e) => {
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

  const newPokemon = {
    id,
    name,
    sprites: {front_default}, 
    typeOne,
    typeTwo
  }

  setPokemonData(pokemon => pokemon.concat(newPokemon));

}
  return <>
  <h2>Create Pokemons</h2>
  <form onSubmit={handleSubmit} className='container-form'>
    
      <input type="number" id="id" name="id" required/>
      <label htmlFor="id">Id:</label>
      <input type="text" id="name" name="name" required/>
      <label htmlFor="name">Name:</label>
      <input type="text" id="image" name="image" required/>

      <label htmlFor="one-select">Type One:</label>

      <select name="typeOne" id="typeOne" required>
          
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
      </select>

      <label htmlFor="two-select">Type Two:</label>

      <select name="typeTwo" id="typeTwo">

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
      <input type="submit" value="Add" />
    </form>  



</>;
};

export default Form;
