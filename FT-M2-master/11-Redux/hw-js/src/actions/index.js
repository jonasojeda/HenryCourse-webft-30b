//INVOCO LOS TIPOS DE ACCIONES DESDE LA CARPETA ACTION TYPES
const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//NOTA (LAS ACTION CREATORS ENVIAN LOS OBJETOS  CON EL TYPE OBLIGATORIO) LAS DECLARAMOS
//COMO ARROW FUNCTION 
//NOTA 2 SE LAS ENVIAMOS A LOS REDUCERS

const incremento = ()=>{return {type:INCREMENTO}} ;

const decremento = ()=>{return {type:DECREMENTO}} ;

const incrementoImpar = ()=> {return {type:INCREMENTO_IMPAR}};

module.exports = {
  incremento,
  decremento,
  incrementoImpar
}