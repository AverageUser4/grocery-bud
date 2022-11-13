import React from 'react';

import Item from './Item.js';
import Inputs from './Inputs.js';

export default function GroceryBud() {
  return (
    <section className="grocery-bud">

      <h1 className="grocery-bud__heading">Grocery Bud</h1>

      <Inputs/>

      <ul className="items-list">

        <li className="items-list__item"><Item/></li>
        <li className="items-list__item"><Item/></li>
        <li className="items-list__item"><Item/></li>
        <li className="items-list__item"><Item/></li>

      </ul>

      <button className="grocery-bud__clear-all-button">Clear Items</button>

    </section>
  );
}