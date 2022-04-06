import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const IntroUseEffect = () => 
{
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  
  useEffect(() => 
  {
    console.log("1- useEffect sin dependencias");
 
  })

  useEffect(() => 
  {

    console.log("2- useEffect con array vacío []");
 
  },[])

  useEffect(() => 
  {
    console.log("3- useEffect con depedencia [counterOne]");
 
  },[counterOne])
  
  useEffect(() => 
  {
    console.log("4- useEffect con depedencia [counterOne - counterTwo]");
 
  },[counterOne,counterTwo])
  

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Cicle of live 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        <h2 className="mt-4 mb-4 text-start">Introducción a useEffect</h2>
        <h2 className="mt-4 mb-4">El valor del contador uno es: <span style={{color:"green"}}>{counterOne}</span></h2>
        <h2 className="mt-4 mb-4">El valor del contador dos es: <span style={{color:"red"}}>{counterTwo}</span></h2>
        <button className="btn btn-success" onClick={()=>setCounterOne(counterOne + 5)}>Incrementar en 5</button>
        <button className="btn btn-danger ms-2" onClick={()=>{setCounterTwo(counterTwo - 5)}}>Decrementar en 5</button>
        </div>
        <div>
          <h3>💡 Importante:</h3>
          <hr/>
          <ol className='list-group list-group-numbered'>
            <li className='list-group-item p-4'>
                <span>useEffect sin dependencias se ejecuta al cambiar el estado del componenete</span>
            </li>
            <li className='list-group-item p-4'>
                <span>useEffect con un array [] se ejecuta solo una vez y al cambiar el estado del componenete no se ejecuta</span>
            </li>
            <li className='list-group-item p-4'>
                <span>useEffect con una dependencia [counterOne] se ejecuta solo cuando se cambia el estado counterOne</span>
            </li>
            <li className='list-group-item p-4'>
                <span> los useEffect se ejecutan dependiendo de como se han creado</span>
            </li>
          </ol>

        </div>
      </div>
    </>
  )
}

export default IntroUseEffect