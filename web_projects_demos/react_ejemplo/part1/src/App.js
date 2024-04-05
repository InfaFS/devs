//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Mensaje from './Mensaje.js';

 // Inicializamos el estado con 0
const App = () => {
  const [value, setValue] = useState(0);

  const Increment = () => {
    setValue(value + 1)
  }
  
  const Decrement = () => {
    setValue(value - 1)
  }
  return (
    <div className="App">
      <main>
        <Mensaje color='red' message='Juti la mas linda'></Mensaje>
        <Mensaje color='green' message='Juti la mas crack'></Mensaje>
        <Mensaje color='blue' message='Juti la mas copada'></Mensaje>
        <Mensaje color='pink' message='Juti la mas Elle Woods'></Mensaje>
      </main>
      <div>
      <button onClick={Increment}> {/* Usamos una función arrow para ejecutar setValue */}
        Increment number
      </button>
      <button onClick={Decrement}> {/* Usamos una función arrow para ejecutar setValue */}
        Decrement number
      </button>
      <h1>
      {"Value equals = " + value }
      </h1>
      </div>
    </div>
  );
}

export default App;
