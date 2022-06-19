import React, { useState } from "react";
import Clicker from "./Clicker";

function App() {
  const [isClicker, setShowClicker] = useState(false);

  const toggleClicker = () => {
    setShowClicker(!isClicker);
  };
  return (
    <div>
      <button onClick={toggleClicker}>Toggle clicker</button>
      {isClicker && <Clicker />}
    </div>
  );
}
import React, { useEffect, useState } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  const decriment = () => {
    setCount(count - 1);
  };
  const incriment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(count - count);
  };

  useEffect(() => {
    console.log("click ", count);
    return () => console.log("gb click");
  }, [count]);
  return (
    <div className="clicker">
      <button onClick={decriment} className="decrement">
        -
      </button>
      <span
        className="count"
        style={{ display: "inline-block", margin: " 0.5rem   0.5rem" }}
      >
        {count}
      </span>
      <button onClick={incriment} className="increment">
        +
      </button>
      <button onClick={reset} className="reset">
        reset
      </button>
    </div>
  );
}

export default Clicker;
