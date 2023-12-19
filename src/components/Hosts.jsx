import React from 'react';
import Card from './Card';
import { personas } from '../data/personas';

function Hosts() {
 //aplico filtro de hosts
  const hosts = personas.filter(persona => persona.role === 'Host');
  //mapeamos hosts
  const personaList = hosts.map(host => (
    <Card
      key={host.name} 
      title={host.name}
      imagen={host.image}
      role={host.role}
      description={host.description}
      location={host.location}
      contact={host.contact}
    />
  ));

  return (
    <div>
      <div className='container'>
        {personaList}
      </div>
    </div>
  );
}

export default Hosts;

