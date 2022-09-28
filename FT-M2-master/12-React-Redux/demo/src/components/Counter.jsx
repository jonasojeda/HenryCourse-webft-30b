import React, { Component } from 'react';
import store from '../store.js';
import * as actionsCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index.js';
import axios from 'axios';


const Counter = ({ counter, increment, decrement, reset, fetchPost}) => ( //RECIVE COMO PROPS LAS ACCIONES Y LAS APLICA A CADA BOTON
      <p>
        Clicked: {counter} times {/* {counter} retorna el valor de mi initialState store.getState().count*/ }
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        {' '}
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={() => fetchPost(counter)}>
          Fetch
        </button>
      </p>
    )

//QUE QUIERO DEL STORE¿? -> mapStateToProps -> RECIBE: STATE 
//                                          -> RETORNA: {QUE INVOCA A LAS KEYS DEL ESTADO QUE QUIERA} 
const mapStateToProps = (state) => ({
  counter: state.count,
});


// QUIERO HACER ALGUN CAMBIO EN EL STORE¿? -> mapDispatchToProps
//OPCION 1 : mapDispatchToProps
//           -> RECIBE: DISPATCH
//           -> RETORNA: OBJ {increment: (function(){type:'INCREMENT'})}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch); //bindActionCreators(actionsCreators, dispatch)
                                                        //binActionCreators: bindea todas las acciones
                                                        // como parametros les mando todas las action cereators
                                                        // y dispatch tambien se pueden pasar en un distracturing{action 1, action2,..,actionN }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 

//////////////////RESUMEN CONTAINERS SMART/////////
//*RECIVE COMO PROPS A LAS A ACCIONES Y LAS APLICA A CADA BOTON 
//Y SE LAS INVOCA CON LOS EVENTOS DE onClick(accion)
//NOTA: LAS ACCIONES DEBEN IMPORTARSE 

/////////////////RESUMEN DE CONNECT ////////////////////////
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
                                                                //^ 
                                                            //ENVIA CONTAINER


/////////////// RESUMEN MAPSTATE TO PROPS///////////
//ES UNA FUNCION QUE REVICE EL ESTADO Y RETORNA UN OBJETO 
//const mapStateToProps = (state) => ({
//  counter: state.count,
//});

//QUE QUIERO DEL STORE¿? -> mapStateToProps -> RECIBE: STATE 
//                                          -> RETORNA: {QUE INVOCA A LAS KEYS DEL ESTADO QUE QUIERA} 

//////////////RESUMEN DISPATCH TO PROPS/////////////