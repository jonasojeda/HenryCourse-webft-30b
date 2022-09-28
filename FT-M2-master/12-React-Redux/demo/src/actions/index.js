import axios from 'axios';

export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
    return {
      type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

///////////////////////////////////////////
export function getPost() {
  return {
    type: 'GET_POST',
  }
}

export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
}

export function fetchPost(valor) { // retorna funciones a pesar de solo recivir acciones NOTA: reducer solo acepta acciones 
  return function (dispatch) {     //DEVUELVE UNA FUNCION¿?
    dispatch(getPost()); // EL DISPATCH LLEGA DEL COMPONENTE -> dispatch({type:'GET_POST'}) LINE 20
    axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`) // CONSULTA A LA APY 'URL/value'
      .then(r => r.data) // r.data = al objeto traido de la api
      .then(d => dispatch(receivePost(d))) // en 'd' se aloja el objeto traido de 'r' y ejecuta un dispatach
      .catch(e => console.log(e));
  }
}

//NOTA CUANDO SE EJECUTA UNA FUNCION ASINCRONA POR MEDIO DEL MIDDLEWARE 
//SE EJECUTA UNA ACCION EN FORMA DE FUNCION LINE 34