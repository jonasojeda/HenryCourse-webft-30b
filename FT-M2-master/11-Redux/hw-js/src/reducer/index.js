//INVOCAMOS DESDE ACTION-TYPES  
const { INCREMENTO, DECREMENTO } = require('../action-types');

//DECLARAMOS EL VALOR INCIAL
const initialState = {
  contador: 0,
  owner: ''
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
// NOTA : QUE CASOS TENEMOS Y EN QUE CASO QUE HACEMOS?
function contador(state = initialState, action) {
  switch(action.type){

    case INCREMENTO:
      return{ // RETORNAMOS UN OPBJETO AOSCIADO AL STATE
        ...state, contador: state.contador + 1 //ASOCIAMOS EL ESTADO A CONTADOR DE INITIAL STATE
      }

    case DECREMENTO:
      return {
        ...state, contador: state.contador -1 
      }
      
    // NUNCA OLVIDARSE DEL CASO DEFAULT!
    default:
      return {...state}

  }
}

module.exports = contador;