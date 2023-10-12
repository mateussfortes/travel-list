import { useState } from "react";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if(sortBy === 'input') sortedItems = items;

  if(sortBy === 'description')  
    sortedItems = items.slice().
    sort(
      (a,b) => a.description.localeCompare(b.description)
    );

  if(sortBy === 'packed')  
    sortedItems = items.slice().
    sort(
      (a,b) => Number(a.packed) - Number(b.packed)
    );
    
  
  
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item)=> (
          <Item 
            item={item} 
            key={item.id} 
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Filtrar por ordem de adição</option>
          <option value="description">Filtrar por descrição</option>
          <option value="packed">Filtrar por itens guardados</option>
        </select>
        <button onClick={onClearList}>Limpar lista</button>
      </div>
    </div>
  );
}

function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>x</button>
    </li>
  );
}