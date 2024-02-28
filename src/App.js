import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";
import Counter from "./components/Counter";
const App = () => {
  return (
    <div className="todo-container">
      <Header todotext="Todo App" />
      <TodoItem text="Eat" />
      <TodoItem complete={false} text="Dinner-2" />
      <TodoItem text="Lunch" />
      <TodoItem text="Dinner" />
      <Button />
      <Counter />

    </div>
  );
};

export default App;
