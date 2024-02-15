import React from "react";

function Display({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Surname: {item.surname}</p>
          <p>Email: {item.email}</p>
          <img src={item.imageURL} alt={`${item.name} ${item.surname}`} />
        </div>
      ))}
    </div>
  );
}

export default Display;
