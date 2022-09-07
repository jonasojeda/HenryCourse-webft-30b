'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];
  
  while(num !== 1){
    let ban = 0
    for(let div = 2; ban==0; div++ ){
      if((num%div) == 0){
        array[array.length]=div;
        num=num/div;
        ban=1;
      }
    }
  }

  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let len = array.length;

  for(var i = 0; i<len-1; i++){
    for(let j=0; j<len-1; j++){

      if(array[j]>array[j+1]){
        let aux=array[j];
        array[j]=array[j+1];
        array[j+1]=aux;
      }

    }
    len--
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=1; i < array.length; i++){
    let j= i-1;
    let aux = array[i];

    while(j>=0 && aux< array[j]){
      array[j+1]=array[j]
      j--
    }
    array[j+1]=aux;

  }

  return array;  
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i=0 ; i<array.length-1;i++){
    var men = i;
    for(var j= i+1; j<array.length; j++){
      if(array[j]<array[men]){
        var men = j;
      }
    }
    var aux = array[i];
    array[i]= array[men];
    array[men]= aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
