import React from 'react'
import { useState } from 'react'
import Padre from './Padre'
import { useContext } from 'react'
import AbueloContext  from '../context/AbueloProvider'


const Abuelo = () => 
{
  const {ObjdineroContext} = useContext(AbueloContext)

  const [Objdinero, setObjDinero] = useState({
    detalle:"Play Station",
    dinero:500
  })

  return (
    <div className='flex justify-between h-full'>
      <p>C. Abuelo</p>
      {/* <pre>{JSON.stringify(Objdinero,null,1)}</pre> */}
      <pre>{JSON.stringify(ObjdineroContext,null,1)}</pre>
      <div className='bg-indigo-100 w-3/5 h-full border-2 border-slate-800'>
        <Padre Objdinero={Objdinero} setObjDinero={setObjDinero}/>
      </div>
    </div>
  )
}

export default Abuelo