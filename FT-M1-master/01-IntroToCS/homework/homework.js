'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numero = String(num);
  var invertida=[];
  var sum=0;

  //Invirto el numero Binario
  for(var i = numero.length-1; i>=0; i--){
    invertida.push(Number(numero[i]));
  }

  //realizo las operaciones de potencia y las sumo en una variable
  for(var i=0; i<invertida.length; i++){
    if(invertida[i]==1){
      sum=sum+Math.pow(2,i);
    }
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  //Declaro un arreglo para almacenar los restos durante la conversion del decimal
  var arraybin=[];
  if(num!=0 && num!=1){
    while(num!=0 && num!=1){
        arraybin.unshift(num%2);
        num=Math.trunc(num/2);
    }
  }else{
    arraybin.unshift(num);
  }
  arraybin.unshift(num);
  ////////////////////////////////////////
  //Declaro la variable en donde guardare mi matriz en formato String

  var numeroBinario="";
  for(var i =0; i < arraybin.length;i++){
      numeroBinario=numeroBinario+String(arraybin[i]);
  }

  return numeroBinario;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}