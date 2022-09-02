///////////////////////////////// EJERCICIOS EXTRA /////////////////////////////////
//FUENTE: https://jesusfernandeztoledo.com/ejercicios-resueltos-de-recursividad-en-javascript/

/*Ejercicio 1

Insertar en un array números aleatorios. El número mínimo de elementos del array se debe pedir desde teclado.*/ 

function recurscontador(n){
    if(n==0) return n;

    console.log(n);
    return recurscontador(n--);
}

console.log("Hola")