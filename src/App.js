import "./App.css";
import Display from "./Display";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); // Use functional update form
  };

  return (
    <div className="App">
      {/* Pass addItem as a prop to Form */}
      <Form onAdd={addItem} />
      {/* Pass items as a prop to Display */}
      <Display items={items} />
    </div>
  );
}

export default App;
