import React, { useState, useEffect, useRef } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

function TimerHooks() {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  const handleStart = () => {
    setIsCount(true);
  };
  const handleStop = () => {
    setIsCount(false);
  };
  const handleReset = () => {
    setCount(0);
    setIsCount(false);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => {
          return prevCount + 1;
        });
      }, 1000);
    }

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    };
  }, [isCounting]);

  return (
    <div>
      <div>React Timer</div>
      <div>{count}</div>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default TimerHooks;
