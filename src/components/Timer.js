import React from "react";
import "./Timer.css";
import Countdown from "react-countdown";
function Timer() {
  var dateobj = new Date("November 1, 2021 00:00:00");
  var B = dateobj.getDate();
  return (
    <>
      <div className="timer">
        <Countdown date="2021-11-01T00:00:00"></Countdown>
      </div>
      <div className="labels">
        <p>DAYS</p>
        <p>HOURS</p>
        <p>MINUTES</p>
        <p>SECONDS</p>
      </div>
    </>
  );
}

export default Timer;
