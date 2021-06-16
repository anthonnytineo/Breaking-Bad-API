import React, { useState, useEffect } from "react";

const Ficha = (props) => {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    const seleccionarPersonaje = async () => {
      const personajeSeleccionado = await cargarPersonaje(props.id);
      setPersonaje(personajeSeleccionado[0]);
    };

    seleccionarPersonaje();
  }, [props.id]);

  const cargarPersonaje = async (id) => {
        try {
            const data = await fetch(
                `https://breakingbadapi.com/api/characters/${id}`
            );
            const personaje = await data.json();
            console.log(personaje);
            return personaje;
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div className="personajeContenedor">
      <h2>{personaje.name}</h2>
      <div>{personaje.category}</div>
      <img src={personaje.img} alt="" />
      <div>
        <h1>Interpretado por:</h1>
        <span>{personaje.portrayed}</span>
      </div>
    </div>
  );
};

export default Ficha;
