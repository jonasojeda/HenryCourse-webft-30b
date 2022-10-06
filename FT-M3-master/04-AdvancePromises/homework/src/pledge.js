'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor){

    this._state = "pending"

    if(typeof executor !== "function"){    
        throw new TypeError("The order is executor, function")
        
    }
        //Bindead
    executor(
        this._internalResolve.bind(this), 
        this._internalReject.bind(this) ) //Se puede bindear

        //arrow function
    //executor(
        //(value)=>{this._internalResolve(value)}, 
        //(value)=>{this._internalReject(this)}); // o Usar una arrow function
}

$Promise.prototype._internalResolve = function (value){
    if(this._state =="pending" ){
        this._state = 'fulfilled';
        this._value = value;
    }
};

$Promise.prototype._internalReject = function(value){
    if(this._state =="pending" ){
        this._state = 'rejected';
        this._value = value;
    }
    
};


module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
