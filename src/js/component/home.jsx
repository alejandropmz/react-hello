import React from "react";
import Counter from "./Counter.jsx";
import 'bootstrap';


//create your first component
const Home = () => {
  return <div className="home">
    <Counter 
      sixNumber = '0'
      fiveNumber = '0'
      fourNumber = '0'
      thirdNumbe = '0'
      secondtNumber = '0'
      firstNumber = '0'
      />
  </div>;

};

export default Home;
