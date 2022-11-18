import React from "react";

const Counter = (props) => {
  return (
    <div className="container">
      <div className="clock">
        <i class="bi bi-clock-fill"></i>
        <div className="firstNumber">{props.seconds}</div>
      </div>
    </div>
  );
};

export default Counter;
