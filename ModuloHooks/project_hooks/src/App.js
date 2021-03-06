import P from 'prop-types'
import './App.css';
import React, { useState, useCallback} from 'react'

const Button = React.memo(({incrementButton}) => {
  return  <button onClick={() => incrementButton(10)}>Adicionar</button>
})

Button.prototypes = {
  incrementButton: P.func
}

function App() {
  const [counter, setCounter] = useState(0)
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num)
  }, [])
  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
