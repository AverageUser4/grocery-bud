import React from 'react';

import { ReactComponent as EditIcon } from '../resources/edit.svg';
import { ReactComponent as DeleteIcon } from '../resources/delete.svg';

export default function Item({ text, deleteItem, startEditingItem, isCurrentlyEdited }) {
  return (
    <li 
      className={'items-list__item' + (isCurrentlyEdited ? ' items-list__item--active' : '')}
    >

      <span>{text}</span>

      <div className="items-list__buttons">

        <button 
          className="items-list__button"
          onClick={(event) => {
            event.stopPropagation();
            startEditingItem();
          }}
        >
          <EditIcon/>
        </button>

        <button 
          className="items-list__button items-list__button--color-2"
          onClick={deleteItem}
        >
          <DeleteIcon/>
        </button>

      </div>
    
    </li>
  );
}