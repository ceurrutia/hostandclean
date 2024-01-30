
import React, { useState } from 'react';

function CityFilter({ personas, onCityChange }) {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onCityChange(city);
  };

  return (
    <div className='city-filter'>
      <label htmlFor="cityFilter">Filter by city: </label>
      <select id="cityFilter" value={selectedCity} onChange={handleCityChange}>
        <option value="">All cities</option>
        {Array.from(new Set(personas.map(persona => persona.location))).map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default CityFilter;
