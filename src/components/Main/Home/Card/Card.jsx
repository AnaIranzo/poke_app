import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  let typeOne
  let typeTwo
  if (props.data.data.types) {
    let types = props.data.data.types.length
   
    if (types === 1) {
      typeOne = props.data.data.types[0].type.name
      
    }else{
      typeOne = props.data.data.types[0].type.name
      typeTwo = props.data.data.types[1].type.name
    }
  }
  
  
  return <div className="card-container">
    {props.data ? <><img src={props.data.data.sprites.front_default} alt=""  />
    <Link to={`/pokemon/${props.data.data.id}?name=${props.data.data.name}&image=${props.data.data.sprites.front_default}&typeOne=${typeOne}&typeTwo=${typeTwo}`}>{props.data.data.name}</Link>

    <p>Nº {props.data.data.id}</p></> :''} 
    

  </div>;
};

export default Card;
