import React from 'react'
import Card from './Card'
import { personas } from '../data/personas';

function Cleaners() {
    //aplico filtro de cleanres
  const cleaner = personas.filter(persona => persona.role === 'Cleaner');
  //mapeamos cleaners
  const personaList = cleaner.map(cleaner => (
    <Card
      key={cleaner.name} 
      title={cleaner.name}
      imagen={cleaner.image}
      role={cleaner.role}
      description={cleaner.description}
      location={cleaner.location}
      contact={cleaner.contact}
    />
  ));
     
      return (
        <div>
          <div className='container'>
    
            {personaList}
    
          </div>
        </div>
    )
}

export default Cleaners
