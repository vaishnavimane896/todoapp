import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    if (inputList.trim() === "") return;
    setItems((prev) => [...prev, inputList]);
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>TODO list</h1>

        <input
          type="text"
          placeholder="Add an item"
          value={inputList}
          onChange={itemEvent}
        />

        <button onClick={listOfItems}>+</button>

        <ol>
          {items.map((item, index) => (
            <Todolist
              key={index}
              id={index}
              text={item}
              onDelete={deleteItem}
              
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;