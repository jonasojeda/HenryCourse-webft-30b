import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {BrowserRouter} from 'react-router-dom'
console.log("Estoy en el index.js")
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
