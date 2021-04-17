import './App.css';
import { useState, useEffect } from 'react'
function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  //componentDidUpdate = executa toda vez que o componente atualizar e for criado
  useEffect(() => {
    console.log('update')
  })
  //componentDidMount = executa uma vez quando criar
  useEffect(() => {
    console.log('montando')
    return () => {
      // aqui é quando desmontar
    }
  }, [])

  //componentDidMount = executa uma vez quando a dependencia mudar (counter)
  useEffect(() => {
    console.log('contador mudou ', counter)
  }, [counter])

  return (
    <div className="App">
      <h1>Contador 1: {counter} | Contador 2: {counter2}</h1>
      <button onClick={() => {setCounter(counter + 1)}}>Adicionar</button>
      <button onClick={() => {setCounter2(counter2 + 1)}}>Adicionar 2</button>
    </div>
  );
}

export default App;
