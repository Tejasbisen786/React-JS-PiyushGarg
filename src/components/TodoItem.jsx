import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      {props.complete ? <></> : <input type="checkbox" />}
      <span className="todo-text">{props.text}</span>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
