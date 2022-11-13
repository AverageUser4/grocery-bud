import React from 'react';

import { ReactComponent as EditIcon } from '../resources/edit.svg';
import { ReactComponent as DeleteIcon } from '../resources/delete.svg';

export default function Item({ text }) {
  return (
    <>

      <span>{text}</span>

      <div className="items-list__buttons">

        <button className="items-list__button">
          <EditIcon/>
        </button>

        <button className="items-list__button items-list__button--color-2">
          <DeleteIcon/>
        </button>

      </div>
    
    </>
  );
}