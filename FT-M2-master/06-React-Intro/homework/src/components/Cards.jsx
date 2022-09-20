import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  if(!cities) return <h1>No hay ciudades</h1>
  return (<div>
    {
          cities.map(city => (
              <Card 
              max={city.main.temp_max} 
              min={city.main.temp_min} 
              name = {city.name} 
              img ={city.weather[0].icon}
              onClose= {() => alert(city.name)}  />
          ))
    }
  </div>)
};