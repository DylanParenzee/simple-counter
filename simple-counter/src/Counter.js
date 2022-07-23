import React from "react";
import { useState } from "react";

const Counter = () => {
  //counter and counter state

  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Simple Counter</h1>
      <h1>{counter}</h1>
      <button className="btn">Increase</button>
      <button className="btn">Reset</button>
      <button className="btn">Decrease</button>
    </>
  );
};

export default Counter;
