import React, { useState } from "react";

function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, surname, email, imageURL });
    setName("");
    setSurname("");
    setEmail("");
    setImageURL("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Surname"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
