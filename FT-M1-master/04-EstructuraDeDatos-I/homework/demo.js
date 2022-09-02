// Numero Factoriales con recursividad;

//RECURSIVIDAD
// SE LLAMA ASI MISMO
// CONDICION DE CORTE
// EN GRAL EL ARGUMENTO CON EL CUAL SE LLAMA A LA FN ES DISTINTO AL ARGUMENTO ORIGINAL

function factorial(num){
    console.log(num)
    if(num<0) return "no Existe el factorail de un numero negativo";
    if(num<=1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(4));

//SET

var arreglo = [1,2,3,4,4,5,5,1,2]
var set1    = new Set(arreglo)
console.log(arreglo)   // [ 1, 2, 3, 4, 4, 5, 5, 1, 2 ]
console.log(set1)      // Set { 1, 2, 3, 4, 5 }

//Stack o pila

function stack(){
    this.arr = []
}

let nuevoStack = new stack();

stack.prototype.agregar = function(element){
    this.arr.push(element);
}


stack.prototype.remover = function(element){
    this.arr.pop();
}

//////////////////////////APUNTES APUNTES APUNTES APUNTES APUNTES////////////////////////////////////

//Estructuras de Datos I

//Recursividad
