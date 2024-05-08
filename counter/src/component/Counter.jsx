import React, { useState } from "react";

const Counter = () => {
  const [valueOfCount, setValueOfCount] = useState(0);

  const handleIncrement = () => {
    setValueOfCount((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValueOfCount((prevValue) => prevValue - 1);
  };
  return (
    <div>
      <h3>Count: {valueOfCount}</h3>
      <button name="Increment" onClick={handleIncrement}>
        Increment
      </button>
      <button name="Decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
