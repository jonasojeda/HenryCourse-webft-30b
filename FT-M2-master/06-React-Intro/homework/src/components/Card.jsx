import React from 'react';

export default function Card(props) {
  // acá va tu código
  
  return <div>
    <button onClick={props.onClose}>x{props.onClose}</button>
    <h1>Max {props.max}</h1>
    <h1>Min {props.min}</h1>
    <h1>{props.name}</h1>`
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
  </div>
};