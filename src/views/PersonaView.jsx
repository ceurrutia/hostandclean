import React from 'react'

function PersonaView({ persona }) {
    return (
      <div>
        <h1>{persona.name}</h1>
        <h2>{persona.description}</h2>
        <img src={persona.image} alt={persona.name + " image"} />
      </div>
    );
  }

export default PersonaView