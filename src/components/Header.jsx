import React from "react";

const Header = (props) => {
  return (
    <>
      <h1 className="todo-header">{props.todotext}</h1>
    </>
  );
};

export default Header;
