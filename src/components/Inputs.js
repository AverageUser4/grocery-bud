import React from 'react';

export default function Inputs({ addItem }) {
  const [text, setText] = React.useState('');

  return (
    <form 
      className="inputs"
      onSubmit={(e) => e.preventDefault()}
    >

      <input
        size="1"
        className="inputs__text"
        placeholder="e.g. eggs"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="inputs__button"
        onClick={() => addItem(text)}
      >
        Submit
      </button>

    </form>
  );
}