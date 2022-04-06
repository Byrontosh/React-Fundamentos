import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



export const Reloj = ({estado}) => 
{
  const [timer, setTimer] = useState(new Date().toLocaleTimeString())
    
 useEffect(() => 
 {
    const  timer= setInterval(() => 
        {
          console.log("Ejecutando el Timer");
          setTimer(new Date().toLocaleTimeString())
        }, 1000);
 
    return () => 
    {
        console.log("Limpieza")
        clearInterval(timer)
    }

 }, [estado])
 
  return (
    <>
        <button type="button" className="btn btn-primary btn-lg">
            <span className="badge bg-danger">{timer}</span>
        </button>
    </>
  )
}
