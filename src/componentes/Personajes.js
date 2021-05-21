import React, {useState, useEffect} from 'react'

const Personajes = (props) => {
    const [listaPersonajes, setListaPersonajes] = useState ([]);



    useEffect(() => {
        const cargaDatos = async () => {
            const personajes = await cargarListaPersonajes();
            setListaPersonajes(personajes);
        }

        cargaDatos();

    }, []);



    const cargarListaPersonajes = async () => {
        try{
            const data = await fetch('https://breakingbadapi.com/api/characters');
            const personajes = await data.json();
            //console.log(personajes);
            return personajes;
        } catch (err) {
            console.log(err)
        }
    }


    const selecciionar = (event) => {
        props.seleccionarPersonaje(event.target.value);
    }

    return(
        
        <select>
            {listaPersonajes.map(e => <option key={e.char_id} value={e.char_id}>{e.name}</option>)}
        </select>
    )
}


export default Personajes;