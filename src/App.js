import React, { useState } from "react";
import Personajes from "./componentes/Personajes";
import Ficha from "./componentes/Ficha";
import "./App.css";

function App() {
  const [personajeId, setPersonajeId] = useState("");

  const seleccionarPersonaje = (id) => {
    setPersonajeId(id);
    //console.log(personajeId);
  };

  return (
    <div className="App">
      <h1>Breaking Bad API</h1>
      <Personajes seleccionarPersonaje={seleccionarPersonaje} />
      <Ficha id={personajeId} />
    </div>
  );
}

export default App;
