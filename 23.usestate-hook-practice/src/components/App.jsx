import React, { useState } from "react";

function App() {
  let t = new Date().toLocaleTimeString();

  const [time, giveTime] = useState(t);

  // Updates time on each click with help of useState() 2nd argument 'giveTime' function
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    giveTime(newTime);
  }

  // Updates time every seocnd dynamically
  // WAY-1
  // function updateTimeEachSecond() {
  //   updateTime();
  // }
  // setInterval(updateTimeEachSecond, 1000); // 1st arguemnt is fucntion, 2nd is 1000 milisecond
  //                    OR
  // WAY-2
  setInterval(updateTime, 1000); // directly call updateTime() in setInterval()

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
