const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)

  for(let i = 0; i < startEl.children.length; i++){

    let childrenResult = traverseDomAndCollectElements(matchFunc, startEl.children[i])

    resultSet=[...resultSet, ...childrenResult];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==="#") return "id";

  if(selector[0]===".")return "class";

  for(let i = 1; i<selector.length; i++){
    if(selector[i]===".") return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    //funcion que es la herrmaienta para ir a buscar al selector
    matchFunction = (el) => {
      //el === selector?
      if(("#"+el.id) === selector){
        return true
      }else{
        return false
      }
    }
    
  
  } else if (selectorType === "class") {

    matchFunction=(el)=>{
      //el -> {id:"", classlist:[classname1,classname2,classname3,]}
      for(let index = 0; index < el.classList.length; index++){
        if(("."+el.classList[index])===selector)return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag.class") {

    matchFunction=(el)=>{
      let[tag, clase] = selector.split(".");
    
      //Porque debe buscar un tag y un class
  
      return matchFunction(tag)(el) && matchFunction("."+clase)(el);
    }

  } else if (selectorType === "tag") {
    matchFunction=(el) =>{
      return el.tagName.toLowerCase() === selector 
    }
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
