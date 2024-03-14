import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => setTime(time + 1),1000);

    return function () {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <h1> StopWatch </h1>
      <p> Current Time is {time}</p>
    </div>
  );
};

export default StopWatch;
