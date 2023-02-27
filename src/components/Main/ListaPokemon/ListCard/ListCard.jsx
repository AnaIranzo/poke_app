import React from "react";

const Listcard = (props) => {

  
 
  
  
  return <div className="card-container">
    {props.data ? <><img src={props.data.sprites.front_default} alt=""  />
    <p>{props.data.name}</p>
    <p>Nº {props.data.id}</p></> :''} 
    

  </div>;
};

export default Listcard;