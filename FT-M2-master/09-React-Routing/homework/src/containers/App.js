import React, { useState } from 'react';
import './App.css';
import Cards from '../components/Cards'
import Nav from '../components/Nav.jsx';
import {Route} from 'react-router-dom';
import About from '../components/About';
import City from '../components/City';



function App() {
  const [cities, setCities] = useState([]);
  const apiKey = '45e8605753566b2799b9ab7165ab278a'
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route path={'/'} render={() => <Nav onSearch={onSearch} />}/>

      <Route path={'/'} render={()=><Cards cities={cities} onClose={onClose}/>} />
      <Route exact path='/about' component={About}/>

      <Route exact path='/city' component={City}/>
    </div>
  );
  }
export default App;
