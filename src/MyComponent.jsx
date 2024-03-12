import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("My Component is  Mounting");
  });

  return <h3> My Component </h3>;
};

export default MyComponent;
