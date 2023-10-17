import React, { useState } from "react";
import './TodoList.css';

function Todo() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  function addTodoItem() {
    const INPUT = text.trim();
    if (INPUT === "") {
      alert("Please Enter a TodoList Item");
    } else {
      setList((items) => [...items, INPUT]);
      setText("");
    }
  }

  function deleteTodoItem(index) {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  }

  return (
    <div className="entireLayout">
      <div className="entireLayout">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter a TodoList" className="Input" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="addBtn" onClick={addTodoItem}>Add</button>
      </div>
      <table className="display">
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {list.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td><button className="deleteBtn" onClick={() => deleteTodoItem(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
