//Importamos el modulo createstore de redux
const { createStore } = require('redux');
//Importamos el REDUCER
const contador = require('./reducer');

const { incremento, decremento } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
//1 PARAMETRO - REDUCER
//----------------
//1 let combined = combineReducer (reducer1, reducer2, ... , reducerN) (Encaso de tener mas de un reducer)
//2. store = createStor(combined)
var store = createStore(contador) ;

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor"); // Traemos el valor del documento html

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let count = store.getState().contador
  valor.innerText=count;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':

}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(() => renderContador())

store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

document.getElementById('incremento').onclick=()=> store.dispatch(incremento());

document.getElementById('decremento').onclick=()=> store.dispatch(decremento());
//                         ^                                         ^
//                     id en el documento html          funcion decremento o incremento