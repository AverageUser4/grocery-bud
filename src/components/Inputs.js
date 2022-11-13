import React from 'react';

export default function Inputs() {
  return (
    <form className="inputs">

      <input
        size="1"
        className="inputs__text"
        placeholder="e.g. eggs"
      />

      <button
        className="inputs__button"
      >
        Submit
      </button>

    </form>
  );
}