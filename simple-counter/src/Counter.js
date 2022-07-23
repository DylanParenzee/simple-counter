import React from "react";
import { useState } from "react";

const Counter = () => {
  //counter and counter state
  const [counter, setCounter] = useState(0);

  // increase counter
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  // reset counter
  const resetCounter = () => {
    setCounter(0);
  };

  // decrease counter
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Simple Counter</h1>
      <h1>{counter}</h1>
      <button className="btn" onClick={decreaseCounter}>
        Decrease
      </button>
      <button className="btn" onClick={resetCounter}>
        Reset
      </button>
      <button className="btn" onClick={increaseCounter}>
        Increase
      </button>
    </>
  );
};

export default Counter;
