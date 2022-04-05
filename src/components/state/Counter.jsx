import React from "react";
import { useState } from "react";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleReset = () =>
  {
        setCounter(0)
  }

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Counter App 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        <h2 className="mt-4 mb-4">El valor del contador es: {counter}</h2>
        <button className="btn btn-success" onClick={()=>setCounter(counter + 1)}>Incrementar</button>
        <button className="btn btn-info ms-2" onClick={handleReset}>Resetar</button>
        <button className="btn btn-danger ms-2" onClick={()=>{setCounter(counter-1)}}>Decrementar</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
