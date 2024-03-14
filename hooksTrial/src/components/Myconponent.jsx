import React, { useEffect, useState } from "react";

const Myconponent = () => {
  const [count, setCount] = useState(0);
  //useeffect added

  // useEffect(() => {
  //   console.log("Component Mouting");
  // }, []);

  // function decrementVal() {
  //   count > 0 ? (
  //     setCount(count - 1)
  //   ) : (
  //     <>{alert("Can't Negative Value Print")}</>
  //   );
  // }

  // function incrementVal() {
  //   setCount(count + 1);
  // }

  // let timer = setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  // function stop() {
  //   clearInterval(timer);
  // }

  return (
    <div>
      <h1> Count : {count} </h1>
      {/* <button onClick={incrementVal}> Increment</button> */}
      {/* <button onClick={decrementVal}> Decrement</button> */}
      <button onClick={stop}> Stop</button>
    </div>
  );
};

export default Myconponent;
