import React, { useState } from 'react';
import ValueDisplay from './ValueDisplay';
import "../styles/App.css"

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст..."
      />
      <ValueDisplay value={inputValue} onClear={() => setInputValue('')} />
    </div>
  );
}

export default App;

