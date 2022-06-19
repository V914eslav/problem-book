import React, { useState, useEffect, useRef } from "react";
import TimerWithHooksReducer from "./TimerWithHooksReducer/TimerWithHooksReducer";

function ShowTimerWithHooksReducer() {
  const [isTimer, setTimer] = useState(false);

  const toggleTimer = () => {
    setTimer(!isTimer);
  };

  return (
    <div className="timer">
      <button onClick={toggleTimer}>Show Timer</button>
      {isTimer && <TimerWithHooksReducer />}
    </div>
  );
}
export default ShowTimerWithHooksReducer;
