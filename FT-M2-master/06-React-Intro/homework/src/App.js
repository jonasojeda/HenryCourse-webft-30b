import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {

  /*const [cities, setCities] = useState([]);
  const apiKey = '45e8605753566b2799b9ab7165ab278a'
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
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

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }*/

  return (
    <div className="App">
      <div className='Header'>
        WeatherApp
      </div>

      <hr />

      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>

      <hr />
      <Cards cities={data}/>
    </div>
  );
}

export default App;
