import React, { useState, useEffect } from 'react'

const ListItems = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  useEffect(() => {
    console.log('Компонент ListItems обновлен')
  }, [])

  return (
    <div>
      <h2>Список элементов</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListItems
