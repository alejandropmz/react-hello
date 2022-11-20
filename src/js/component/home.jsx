import React, { useState, useEffect } from "react"; // Primero importante importar 
// tanto useState como useEffect
import Counter from "./Counter.jsx";

const Home = () => {
  //Una vez importado ya podemos usar dentro de nuestra función el useState

  // Se llama la función useState con un arreglo el cual admite 2 parametros.

  // El primer parametro el cual es el estado del componente y el cual podemos actualizar

  // y el segundo parametro es una función la cual podemos llamar cuando queramos actualizar el estado
  // del primer parámetro.

  const [miliSeconds, setMiliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0); 
  const [minutes, setMinutes] = useState(0);
  

  //MILISENGUNDOS
  useEffect(() => {
    let miliSecondsInterval = setInterval(() => setMiliSeconds(miliSeconds + 1), 1);
    console.log(miliSecondsInterval)
    if (miliSeconds == 100){
      setMiliSeconds(miliSeconds * 0);
    }
    return () => clearInterval(miliSecondsInterval);
  }, [miliSeconds]);



  //SEGUNDOS
  useEffect(() => {
    let interval = setInterval(() => setSeconds(seconds + 1), 1000);
    if (seconds == 60){
      setSeconds(seconds * 0);
    }
    return () => clearInterval(interval);
  }, [seconds]);


  //MINUTES
  useEffect(() => {
    let interval = setInterval(() => setMinutes(minutes + 1), 60000);
    if (minutes == 60){
      setMinutes(minutes * 0);
    }
    return () => clearInterval(interval);
  }, [minutes]);

  
  


  return (
    <div className="home">
      <Counter
      minutes = {minutes}
      seconds={seconds} 
      miliSeconds = {miliSeconds}
      />
    </div>
  );
};

export default Home;
