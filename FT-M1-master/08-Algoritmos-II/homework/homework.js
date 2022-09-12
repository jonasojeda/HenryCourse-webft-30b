'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //if(array.length == 1) return array;

  let pivot = Math.round(Math.random)*array.length //Pivot aleatorio
  let left = [];
  let right = [];
  
  for(let i = 0; i<array.length; i++){ //En este loop se dividen
    
    if(array[i]<=array[pivot]) left.push(array[i]); //en caso de ser menor al pivot

    if(array[i]>array[pivot]) right.push(array[i]); // en caso de ser mayor al pivot

  }
  //return quickSort(left).concat(equals).concat(quickSort(right))

  //console.log(left)
  //console.log(right)

  //Casos de recursion segun la division de cada arreglo
  if(left.length > 1 && right.length > 1) return quickSort(left).concat(quickSort(right));

  if(left.length <= 1 && right.length > 1) return left.concat(quickSort(right));

  if(left.length > 1 && right.length <= 1) return quickSort(left).concat(right);

  if(left.length == 1 && right.length == 1) return left.concat(right);

  return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    let middle = Math.floor(array.length/2);

    if(array.length<2)return array;

    let left = array.splice(0,middle);

    return merge(mergeSort(left), mergeSort(array))
}

function merge(left,right){

    let arr = [];
    while(left.length && right.length){

        if(left[0]<right[0]){
            arr.push(left[0])
            left.shift()
        }else{
            arr.push(right[0])
            right.shift()
        }

    }
    return (arr).concat(left).concat(right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
