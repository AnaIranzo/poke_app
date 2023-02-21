import React from "react";


//https://pokeapi.co/api/v2/pokemon/pikachu
const Form = (props) => {






  return <div>

    <form onSubmit={props.onSubmit}>
      <input type="text" name="pokemon"/>
      <input type="submit" value="Buscar" />
    </form>
  </div>;
};

export default Form;
