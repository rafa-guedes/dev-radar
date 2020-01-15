import React, { useState } from 'react';
import Header from './Header'

// Componente: funcao que retorna conteudo html
// * One component per file (react rule)
// * Isolated block of html, css and js that do not interfere with other components in the app

// Estado: Information kept by the component (imutable)

// Propriedade: Atribute in the component, such as title
// * Information that parent component pass to children

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counter: {counter} </h1>
      <button onClick={incrementCounter}>Increment</button>
    </>
  );
}

export default App;
