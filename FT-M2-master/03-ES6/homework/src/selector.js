//const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // selector --> #titulo
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl)


  for (let i = 0; i < startEl.children.length; i++) {

    let childrenResult = traverseDomAndCollectElements(matchFunc, startEl.children[i])

    resultSet = [...resultSet, ...childrenResult] // [,]
  }

  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // string --> "#titulo", ".seccion", "div.parrafo" "span"

  if (selector[0] === "#") return "id"
  if (selector[0] === ".") return "class"

  if (selector.includes(".")) return "tag.class"

  return "tag"

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // funcion que es la herramienta para ir a buscar el selector al dom
    matchFunction = (el) => {
      // #pepito
      // el -> <div id="pepito">asdadaad</div>
      // el.id = "pepito"
      // #pepito === pepito
      return "#" + el.id === selector
    }
  } else if (selectorType === "class") { // ".juanita "
    matchFunction = (el) => {
      //el = {id:"", classList:[juanita, section, .parrafo]}

      for (let index = 0; index < el.classList.length; index++) {

        if ("." + el.classList[index] === selector) return true
      }
      return false
    }

  } else if (selectorType === "tag.class") {
    //[tag, class]
    matchFunction = (el) => {

      let [tag, clase] = selector.split(".")
      // let tag = arr[0]
      // let clase = arr[1]

      // pporque debe buscar tag y class y ya tenemos definido como buscar cada una de ellas
      // Porque en la funcioon functionmartchmaker estamos buscando un selector con el elemento, esta vez estamos buscando que coincida la primer parte con el elemento y luego lo mismo, pero con la segunda parte

      return matchFunctionMaker(tag)(el) && matchFunctionMaker("." + clase)(el)
    }

  } else if (selectorType === "tag") { // DIV, SPAN,

    matchFunction = (el) => {
      return el.tagName.toLowerCase() === selector
    }

  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// $("#titulo")

//HTML
//<div id="pepito">asdadaad</div>


// DOM ---> {}
// let elemento =  {id:"pepito", innerText:"asdadaad", tag:"div"}
// elemento.id
// elemento.tag
