import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  function encode(url) {
    return {
            uri: encodeURI(url),
            uriFull: encodeURIComponent(url)
    };
}

  let typeOne
  let typeTwo
  let encodedURL
  let encodedURLForm 
  if (props.data) {
    encodedURL = encode(props.data.data.sprites.front_default);

    let types = props.data.data.types.length

    if (types === 1) {
      typeOne = props.data.data.types[0].type.name
      
    }else{
      typeOne = props.data.data.types[0].type.name
      typeTwo = props.data.data.types[1].type.name
    }
  }
  if (props.newData) {
    encodedURLForm = encode(props.newData.sprites.front_default);
  }



/* console.log(encodedURL);
console.log(decodeURI(encodedURL.uri)); */

  
  return <div className="card-container">
    {props.data ? <><img src={props.data.data.sprites.front_default} alt=""  />
    <Link to={`/pokemon/${props.data.data.id}/${props.data.data.name}/${typeOne}/${typeTwo}/${encodedURL.uriFull}`}>{props.data.data.name}</Link>
    <p>Nº {props.data.data.id}</p></> :''} 
    {props.newData ? <><img src={props.newData.sprites.front_default} alt=""  />
    <Link to={`/pokemon/${props.newData.id}/${props.newData.name}/${props.newData.typeOne}/${props.newData.typeTwo}/${encodedURLForm.uriFull}`} >{props.newData.name}</Link>

    <p>Nº {props.newData.id}</p></> :''} 
    
    
  </div>;
};

export default Card;
