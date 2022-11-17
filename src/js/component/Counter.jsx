import React from "react";
import 'bootstrap';



const Counter = (props) => {

  
  return (
    <div className="container">
      <div className="clock">
        <div className="c">C</div>
        <div className="sixNumber">{props.sixNumber}</div>
        <div className="fiveNumber">{props.fiveNumber}</div>
        <div className="fourNumber">{props.fourNumber}</div>
        <div className="thridNumber">{props.thirdNumber}</div>
        <div className="secondNumber">{props.secondtNumber}</div>
        <div className="firstNumber">{props.firstNumber}</div>
      </div>
    </div>
  ); 

  

};

export default Counter;
