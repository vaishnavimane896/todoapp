import React from "react";
import "./Todolist.css"
const Todolist = ({ text, id, onDelete }) => {
  return (
    <div className="todo_style">

      <div className="circle"
      onClick={() => onDelete(id)}>-</div>
      <li>{text}</li>
    </div>
  );
};

export default Todolist;