import React from 'react';

import Item from './Item.js';
import Inputs from './Inputs.js';

export default function GroceryBud() {
  const [items, setItems] = React.useState([]);

  const itemElements = items.map((item, index) => 
    <li
      key={index}
      className="items-list__item"
    >

      <Item
        index={index}
        text={item}
      />

    </li>
  );

  function addItem(text) {
    setItems(prev => [...prev, text]);
  }

  return (
    <section className="grocery-bud">

      <h1 className="grocery-bud__heading">Grocery Bud</h1>

      <Inputs
        addItem={addItem}
      />

      <ul className="items-list">

        {itemElements}

      </ul>

      {
        items.length > 0 &&
        <button className="grocery-bud__clear-all-button">Clear Items</button>
      }

    </section>
  );
}