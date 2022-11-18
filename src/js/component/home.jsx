import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    var interval = setInterval(() => setSeconds(seconds + 1), 1000);
    console.log(seconds);
    return () => clearInterval(interval);
  }, [seconds]);


  return (
    <div className="home">
      <Counter seconds={seconds} />
    </div>
  );
};

export default Home;
