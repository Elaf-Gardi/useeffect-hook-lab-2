import React, { useState } from "react";

export default function Form({ submit }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(input);
    setInput("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name: </label>
        <input 
          type="text"
          className="form-control"
          placeholder="User Name"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
