import React from 'react'
import { useState } from 'react'
import { Reloj } from './Reloj'

const Time = () => 
{
 const [estado, setEstado] = useState(false)

  return (
    <>
    <div className="container mt-4">
      <h1 className="mb-4 text-2xl">Time 🐱‍👤🐺</h1>
      <hr />
      <div className="text-center">
          <h3>El estado del timer es: {estado.toString()}</h3>
          {
              estado && <Reloj estado={estado}/>
          }
          <div className='mt-4'>
          <button className="btn btn-success" onClick={()=>{setEstado(true)}}>Activar Reloj</button>
          <button className="btn btn-danger ms-2" onClick={()=>{setEstado(false)}}>Desactivar Reloj</button>
          </div>
      </div>


      <div className='mt-4'>
        <h5>💡 Importante:</h5>
        <hr/>
        <h6>No olvidar el ciclo de vida de los componentes y ejecutar cuando se necesite la fase de desmontaje...</h6>
      </div>
    </div>
  </>
  )
}

export default Time