// App.js
import React, { useState } from 'react';
import "./App.css"
import "./App.scss"
import Card from "./components/Card";
import { personas } from "./data/personas";
import CityFilter from "./components/CityFilter";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/dropdown';

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  // Función para manejar cambios en la selección de la ciudad
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const personaList = personas
    .filter(persona => selectedCity === "" || persona.location === selectedCity)
    .map(v => (
      <Card
        key={v.name}
        title={v.name}
        imagen={v.image}
        role={v.role}
        description={v.description}
        location={v.location}
        contact={v.contact}
      />
    ));

  return (
    <div className='App'>
      <h1> Welcome to Host and clean</h1>
      <p className='home'>Thousands of host users and cleaners to find the closest one in your city.</p>

      <div className='city-filter'>

      {/* Componente CityFilter para el filtro de búsqueda por ciudad */}
      <CityFilter personas={personas} onCityChange={handleCityChange} />
      </div>

      <div className='container'>
        {personaList}
      </div>
    </div>
  );
}

export default App;

