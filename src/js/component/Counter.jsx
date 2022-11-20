import React from "react";

const Counter = (props) => {
  return (
    <div className="container">
      <div className="clock">
        <div><i class="bi bi-clock-fill"></i></div>
        <div className="firstNumber">{props.minutes} :</div>
        <div className="firstNumber">{props.seconds} :</div>
        <div className="firstNumber">{props.miliSeconds}</div>
      </div>
    </div>
  );
};

export default Counter;
