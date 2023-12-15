import React from 'react'
import { Navbar } from 'react-bootstrap';

<Navbar />
function PersonaView({ persona }) {
    return (
      <div>
        
        <h1>{persona.name}</h1>
        <img src={persona.image} alt={persona.name + " image"} />
        <h2>{persona.description}</h2>
        <h2>{persona.role}</h2>
      </div>
    );
  }

export default PersonaView