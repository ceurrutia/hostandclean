import React from 'react'
import "./Card.css";
import { personas } from '../data/personas';


function Card({ title = "titulo por defecto", description = "descripcion por defecto", location = "Locacion por defecto", imagen = "imagen por defecto" }) {
  return (
    <div className='Card'>
      <h2>{title}</h2>
      <img src={imagen} width="100%" alt="Imagen" /> {/* Renderizar la imagen */}
      <h3>{description}</h3>
      <p>{location}</p>
      <button >Ver más </button>
    </div>
  )
}


export default Card;