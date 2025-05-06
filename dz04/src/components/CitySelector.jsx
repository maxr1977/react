import React from 'react'
import '../styles/CitySelector.css'

const CitySelector = ({ cities, onCitySelect }) => {
  return (
    <div className="city-selector">
      <h2>Выберите город:</h2>
      <select onChange={(e) => onCitySelect(e.target.value)}>
        <option value=""> -- Выберите город -- </option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector