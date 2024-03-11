import React, { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(12);


  return (
    <div>
      <p>Count Component :  {count}</p>
      <h5> Number is : {count % 2 == 0 ? "Even " : "odd"} </h5>
      <button > DECREMENT</button>
      <button onClick={() => SetCount(count + 1)}> INCREMENT</button>
    </div>
  );
};

export default Counter;
