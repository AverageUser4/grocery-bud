import React from 'react';

export default function Inputs({ addItem, editItem, currentlyEditedID, items }) {
  const [text, setText] = React.useState('');
  const textInputRef = React.useRef();

  const edit = currentlyEditedID !== -1;

  React.useEffect(() => {
    if(currentlyEditedID === -1)
      return;

    const editedItem = items.find(item => item.id === currentlyEditedID);
    setText(editedItem.text);

    textInputRef.current.focus();
  }, [currentlyEditedID]);

  return (
    <form 
      className="inputs"
      onSubmit={(e) => e.preventDefault()}
    >

      <input
        ref={textInputRef}
        size="1"
        className="inputs__text"
        placeholder="e.g. eggs"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="inputs__button"
        onClick={() => {
          edit ? editItem(text) : addItem(text);
          setText('');
        }}
      >
        {edit ? 'Edit' : 'Submit'}
      </button>

    </form>
  );
}