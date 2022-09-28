import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'; // Es necesario para consultas a una api

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//window.__REDUX_DEVTOOLS_EXTENSION__() se invoca para poder utiliozar redux dev tools
  applyMiddleware(thunkMiddleware),
);

export default store;

//////RESUMEN STORE EN REACT-REDUX//////////////////}
//import { createStore, applyMiddleware } from 'redux'; IMPORTA CREATESTORE PARA CREAR LA STORE
//                       ^applyMiddleware  SIRVE COMO INTERMEDIARIO PARA CONSULTAS EN UNA API