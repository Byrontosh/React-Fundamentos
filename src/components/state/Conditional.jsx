import React from "react";
import { useState } from "react";

const Conditional = () => 
{

  const [conditional, setConditional] = useState(false);

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Conditional App 🐱‍👤🐺</h1>
        <hr />
          <div className="text-center">
          <h2 className="mt-4 mb-4">El valor del condicional es: {conditional.toString()}</h2>
            <button className="btn btn-success" onClick={()=>setConditional(true)}>Activar</button>
            <button className="btn btn-danger ms-2" onClick={()=>{setConditional(false)}}>Desactivar</button>
            {
                conditional 
                ? (
                    <h3 className="mt-3">Has <span className="text-success underline">activado</span> los superpoderes...</h3>
                )
                : (
                    <h3 className="mt-3">Has <span className="text-danger">desactivado</span> los superpoderes...</h3>
                )
            }

            {
                conditional && <h3>Nivel de poder es <span className="text-info">10000</span></h3>
            }

        </div>
        </div>
    </>
  );
};

export default Conditional;
