import React, { useState } from "react";
import Logo from './Logo';
import Form from './Form';
// import Item from "./Item";
import PackingList from "./PackingList";
import Stats from "./Stats";


function App() {
  const [Items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((Items) => [...Items, item]);
  }
  function handleRemoveItem(id) {
    console.log(id);
    setItems((Items) => Items.filter((item) => item.id !== id));
  }

  function handletoggleItem(id) {
    setItems((Items) =>
      Items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all items');
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems} />
      <PackingList Items={Items} deleteItems={handleRemoveItem} onToggle={handletoggleItem} handleClear={clearItems} />
      <Stats items={Items} />
    </div>
  );
}



export default App;




