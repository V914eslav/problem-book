import React, { useState, useEffect, useRef } from "react";
import TimerHooks from "./TimerHooks/TimerHooks";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

function ShowTimerWithHooksRef() {
  const [isTimer, setTimer] = useState(false);

  const toggleTimer = () => {
    setTimer(!isTimer);
  };

  return (
    <div className="timer">
      <button onClick={toggleTimer}>Show Timer</button>
      {isTimer && <TimerHooks />}
    </div>
  );
}
export default ShowTimerWithHooksRef;
