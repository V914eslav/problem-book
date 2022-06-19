import React, { useState } from "react";
import TimerClass from "./TimerClass/TimerClass";

function ShowTimerClass() {
  const [isTimer, setTimer] = useState(false);

  const toggleTimer = () => {
    setTimer(!isTimer);
  };

  return (
    <div className="timer">
      <button onClick={toggleTimer}>Show Timer</button>
      {isTimer && <TimerClass />}
    </div>
  );
}
export default ShowTimerClass;
