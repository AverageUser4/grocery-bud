import React from 'react';

import Item from './Item.js';
import Inputs from './Inputs.js';

export default function GroceryBud() {
  const [items, setItems] = React.useState(() => JSON.parse(localStorage.getItem('itemsData') || []));
  const [currentlyEditedID, setCurrentlyEditedID] = React.useState(-1);
  const [promptData, setPromptData] = React.useState({
    shownPrompt: '',
    timeoutID: null,
    isDanger: false
  });

  const itemElements = items.map((item) => 
    <Item
      key={item.id}
      text={item.text}
      deleteItem={deleteItem.bind(null, item.id)}
      startEditingItem={startEditingItem.bind(null, item.id)}
      isCurrentlyEdited={item.id === currentlyEditedID}
    />
  );

  function showPrompt(prompt, isDanger = false) {
    clearTimeout(promptData.timeoutID);

    const timeoutID = setTimeout(() => setPromptData({ shownPrompt: '', timeoutID: null, isDanger: false }), 1500);

    setPromptData({ shownPrompt: prompt, timeoutID, isDanger });
  }

  function addItem(text) {
    if(!text) {
      showPrompt('Please, enter value!', true)
      return;
    }

    setItems(prev => [...prev, { text, id: Math.random() }]);
    showPrompt('Item added to the list!');
  }

  function deleteItem(id) {
    if(id === currentlyEditedID)
      setCurrentlyEditedID(-1);

    setItems(prev => prev.filter(item => item.id !== id));
    showPrompt('Item removed!', true);
  }

  function deleteAllItems() {
    setItems([]);
    setCurrentlyEditedID(-1);
    showPrompt('List emptied!', true);
  }

  function startEditingItem(id) {
    setCurrentlyEditedID(id);
  }

  function editItem(text) {
    setItems(prev => prev.map(item => item.id !== currentlyEditedID ? item : {
      ...item, text
    }));

    setCurrentlyEditedID(-1);
    showPrompt('Item edited!');
  }

  React.useEffect(() => {
    function handleClick() {
      setCurrentlyEditedID(-1);
    }

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [currentlyEditedID]);

  React.useEffect(() => {
    localStorage.setItem('itemsData', JSON.stringify(items));
  }, [items]);

  return (
    <section className="grocery-bud">

      {
        <span className={
          'grocery-bud__prompt'
            + (promptData.isDanger ? ' grocery-bud__prompt--danger' : '')
            + (promptData.shownPrompt ? ' grocery-bud__prompt--visible' : '')}
        >
          {promptData.shownPrompt}
        </span>
      }

      <h1 className="grocery-bud__heading">Grocery Bud</h1>

      <Inputs
        addItem={addItem}
        editItem={editItem}
        currentlyEditedID={currentlyEditedID}
        items={items}
      />

      <ul className="items-list">

        {itemElements}

      </ul>

      {
        items.length > 0 &&
        <button 
          className="grocery-bud__clear-all-button"
          onClick={deleteAllItems}
        >
            Clear Items
        </button>
      }

    </section>
  );
}