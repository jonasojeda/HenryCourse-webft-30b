import React from 'react';
import { render } from 'react-dom';
import Counter from './src/components/Counter.jsx';
import Post from './src/components/Post.jsx';
import  { Provider } from 'react-redux';
import store from './src/store.js';

render(
    <Provider store={store}>
      <div>
        <Counter />
        <Post />
      </div>
    </Provider>,
  document.getElementById('app')
);
///////////////////////RESUMEN DE = <Provider store={store}> </App> </Provider>/////////////

//Provider es un componente que proviene de react-redux que recive como prop el store en si 
//con el objetivo de que tods los CONTAINERS tengan en cuenta la existencia del store pero no de redux en si
//NOTA:  import  { Provider } from 'react-redux'; SE NECESITA IMPORTAR PROVIDER DE REACT-REDUX
//NOTA 2. : EL STORE ES UNA PROPIEDAD OBLIGATORIA
//NOTA 3: <Provider/> vendria a sustituir a subscribe() escucha al store por cada cambio realizado