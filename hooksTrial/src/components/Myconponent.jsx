import React, { useEffect, useState } from "react";

const Myconponent = () => {
  const [count, setCount] = useState(0);
  //useeffect added
  useEffect(()=>{
    console.log("Component Mouting");
  },[count])

  function decrementVal() {
   (count > 0) ? setCount(count - 1) : <>{alert("Can't Negative Value Print")}</>;
  }

  return (
    <div>
      <h1> Count : {count} </h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={decrementVal}> Decrement</button>
    </div>
  );
};

export default Myconponent;
