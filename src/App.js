import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("press the buttons to change the counter")
  }, []);


  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );

  
}

export default App;
