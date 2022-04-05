import React from 'react'
import { useState } from 'react'

const MensajesError = () => 
{ 
   const [mensaje, setMensaje] = useState("")

  return (
  <>
      <div className="container mt-4">
        <h1 className='mb-4 text-2xl'>Mnesajes de Error App 🐱‍👤🐺</h1>
        <hr />
          <div className="text-center">
          <h2 className="mt-4 mb-4">El valor del mensaje es: {mensaje}</h2>
          <button className="btn btn-success" onClick={()=>setMensaje("Error en la consulta")}>Consultar API</button>

            {
                mensaje && (
                    <div className="alert alert-danger mt-4" role="alert">
                        This is a danger alert with <a class="alert-link" onClick={()=>setMensaje("")}>Volver a consultar</a>. Give it a click if you like.
                    </div>
                )
            }

        </div>
        </div>
    </>
  )
}

export default MensajesError