
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
// ORDEN DE IMPRECION
// 1º: 10
// 2º: 8
// 3º: 8
// 4º: 9
// 5º: 10
// 6º: 1
```


```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
//ORDEN DE IMPRESIONES
// 1º: Undefined
// 2º: Error
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
//ORDEN DE IMPRESIONES
// 1º: Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
//ORDEN DE IMPRESIONES
// 1º: Tony
// 2º: Franco
// 3º: Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
//ORDEN DE IMPRESIONES
// 1º: The Falsh
// 2º: Reverse Falsh
// 3º: The Flash
// 4º: franco

```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 //2
"4px" - 2 //NaN
7 / 0//Infinity
{}[0]//[0]
parseInt("09")//NaN
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 0
[3]+[3]-[10]//23 por que?
3>2>1 // false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//ORDEN DE IMPRESIONES
// 1°: undefined
// 2°: 2
//EXPLICACION
/*En el proceso de Hoisting se realiza un movimiento por el interprete de las
  declaraciones dentro del codigo haciendo posible que la funcion foo se ejecute
  dentro del console.log
*/

```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

//ORDEN DE IMPRESIONES
// 1°: Indefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//1°: Aurelio de Rosas
//2°: Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
// Orden de impresion
// 1,4,3,2
//
```
