import React, { useState, useEffect } from "react"; // Primero importante importar 
// tanto useState como useEffect
import Counter from "./Counter.jsx";

const Home = () => {
  //Una vez importado ya podemos usar dentro de nuestra función el useState

  // Se llama la función useState con un arreglo el cual admite 2 parametros.

  // El primer parametro el cual es el estado del componente y el cual podemos actualizar

  // y el segundo parametro es una función la cual podemos llamar cuando queramos actualizar el estado
  // del primer parámetro.

  const [seconds, setSeconds] = useState(0); 

  //El useEffect 
  useEffect(() => {
    let interval = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);


  return (
    <div className="home">
      <Counter seconds={seconds} />
    </div>
  );
};

export default Home;
