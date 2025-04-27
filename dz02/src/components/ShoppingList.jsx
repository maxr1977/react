import React from 'react'

const ShoppingList = ({ items = []}) => {
   if (items.length ===0) {
      return <p>Список покупок пуст</p>;
   }
  return (
    <div>
      <h2>Список покупок</h2>
      <ul> {items.map((item, index) =>(
         <li key={index}>{item}</li>
         ))}
      </ul>
    </div>
  );
}

export default ShoppingList