import React from 'react'
import "./Card.css";
import { personas } from '../data/personas';
import { Link } from 'react-router-dom';

function Card({ title = "titulo por defecto", description = "descripcion por defecto", role="Rol por defecto", location = "Locacion por defecto", imagen = "imagen por defecto", contact= "" }) {
  return (
    <div className='Card'>
     
     <Link to={title}><h2>{title}</h2></Link> 
      <img src={imagen} width="100%" alt="Imagen" /> {/* Renderizar la imagen */}
      <h3>{role}</h3>
      <p>{description}</p>
      <p>{location}</p>
      <p>{contact}</p>
      
      <Link to={title}><button >Ver más </button></Link> 
       
     
    </div>
  )
}


export default Card;