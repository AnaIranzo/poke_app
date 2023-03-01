import React from "react";
import { Link } from "react-router-dom";


const Listcard = (props) => {
  
  let typeOne
  let typeTwo
  if (props.data.types) {
    let types = props.data.types.length
   
    if (types === 1) {
      typeOne = props.data.types[0].type.name
      
    }else{
      typeOne = props.data.types[0].type.name
      typeTwo = props.data.types[1].type.name
    }
  }else{
    typeOne = props.typeOne
    typeTwo = props.typeTwo
  }
 
  
  return <div className="card-container">
    {props.data ? <><img src={props.data.sprites.front_default} alt=""  />
    <Link to={`/pokemon/${props.data.id}/${props.data.name}/${typeOne}/${typeTwo}`}>{props.data.name}</Link>
    <p>Nº {props.data.id}</p></> :''} 
    
    

  </div>;
};

export default Listcard;