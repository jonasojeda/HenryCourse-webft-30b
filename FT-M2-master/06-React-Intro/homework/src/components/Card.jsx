import React from 'react';
import s from '../styles/Card.module.css';
export default function Card(props) {
  // acá va tu código
  
  return <>
  <div className={s.card}>
    <button onClick={props.onClose} className={s.btn} >x</button>
    <h1>{props.name}</h1>
    <p>Max {props.max}</p>
    <p>Min {props.min}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
  </div>

          </>
};