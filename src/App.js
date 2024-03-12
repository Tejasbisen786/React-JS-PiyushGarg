// import React from "react";

// import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";
// import Button from "./components/Button";
// import "./style.css";
// import Counter from "./components/Counter";
// const App = () => {
//   return (
//     <div className="todo-container">
//       <Header todotext="MY TASK" />
//       <TodoItem text="Eat" />
//       <TodoItem complete={false} text="Dinner-2" />
//       <TodoItem text="Lunch" />
//       <TodoItem text="Dinner" />
//       <Button />
//       <Counter />

//     </div>
//   );
// };

// export default App;
//


import React, { useEffect } from "react";
import MyComponent from "./MyComponent";
const App = () => {

  useEffect(()=>{

    console.log("App Component is Mouting");
  },[])

  return (
    <>
    <MyComponent/>
    </>
  );
};

export default App;
