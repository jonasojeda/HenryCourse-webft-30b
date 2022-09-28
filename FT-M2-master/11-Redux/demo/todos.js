const redux = require('redux'); // SE IMPORTA LA LIBRERIA DE REDUX

const createStore = redux.createStore;  

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';


const initialState = { // DECLARO UN ESTADO INICIAL 
  todos: []
}

const rootReducer = (state = initialState, action) => { //REDUCEERS SE ENCARGAN DEL CAMBIO DE ESTADO
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer); //CREACION DEL STORE


store.subscribe(() => { //store.subscribe() se mantiene atentgo a los cambio en el store
  console.log('Subscription: ', store.getState());
  console.log("line 35")
});

//////////////////////////ACTIONS ////////////////////////////////////(funcion creadora acciones)
// SE CONVOCAN Y SE ENVIAN A LOS REDUCERS
//LAS ACCIONES SON OBJETOS CON UN TYPE OBBLIGATORIO (el type es un string que describe el cambio que quieres hacer dentro del store)
//PAYLOAD: (OPCIONAL) DEVUELVE INFORMACION ADICIONAL AL STORE 
//ENVIAN DATOS AL STORE USANDO EL DISPATCH "store.dispatch(accionCreator(atrib))"
//nota: no hace otra cosa que retornar una accion "funcion que devuelve una accion"

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

store.dispatch(addTodo('Comprar pan')) // dispatch(action()) actualiza el estado en el store
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))

console.log(store.getState()); //getState() solicita datos del store 
//////////////RESUMEN REDUX////////////
//QUE HACE?
// UX --> PIDE UN CAMBIO EN EL ESTADO ¿? DISPATCH(?) --> ACTION={TYPE:'ES_UN_STRING' }
// ^^                                        ^
//                                         REDUCER(ESTDO, ACCION)
//                                         MODIFICA SEGUN CORRESPONDE
//MODIFICA LA UX         -->               DEVUELVO UN NUEVO ESTADO

///////////////STORE///////////////(SOLO 3 FUNCIONES)
//store.getState() solicita la informacion del store
//store.subscribe() se mantiene atento a los cambios en el store y ejecuta una funcion cada vez que existe un cambio
//store.dispatch(action()) DESPÁCHA LA INFORMACION Y LA ACTUALIZA EN EL STORE