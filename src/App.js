import React, {useState} from 'react';
import Personajes from './componentes/Personajes';
import './App.css';

function App() {
  
  const [personajeId, setPersonajeId] = useState("");

  const seleccionarPersonaje = (id) => {
    setPersonajeId(id);
  }

  return (
    <div className="App">
      <h1>Breaking Bad API</h1>
      <Personajes seleccionarPersonaje={seleccionarPersonaje}/>
    </div>
  );
}

export default App;
