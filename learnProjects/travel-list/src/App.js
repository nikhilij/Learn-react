import React, { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
];

function App() {
  const [Items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((Items) => [...Items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems}/>
      <PackingList Items={Items}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away👝</h1>;
}

function Form({onAdditems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  


  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    onAdditems(newItem);
    // function handleQuantity(e){

    // }
    setDescription("");
    setQuantity(1);
  }

  // if(!description) return;



  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>

        {/* since the e.target.value is always a string so change this to number */}
        {[...Array(20)].map((_, index) => (
          <option key={index + 1} value={index + 1}>{index + 1}</option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e) => { console.log(e.target.value); setDescription(e.target.value) }} />


      <button>Add</button>
    </form>
  );
}

function PackingList({Items}) {

  return (
    <>
      <div className="list">
        <ul>
          {Items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item }) {

  const [packed, setPacked] = useState(item.packed);

  function handleChange() {
    setPacked(!packed);
  }

  return (
    <>
      <li >
        <span style={{ textDecoration: packed ? `line-through` : "" }}>
          <input type="checkbox" checked={packed} onChange={handleChange} />
          {" "}{item.quantity}{" "}{item.description}
          <button >❌</button>
        </span>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list, and you already packed x</em>
    </footer>
  );
}


export default App;
