import React from 'react'
import { useContext } from 'react'
import AbueloContext from '../context/AbueloProvider'


const Hijo = ({Objdinero,setObjDinero}) => 
{
  const {ObjdineroContext, setObjDineroContext} = useContext(AbueloContext)
  
  return (
    <>
    <div>C. Hijo</div>

    <pre>{JSON.stringify(ObjdineroContext,null,1)}</pre>

    <button onClick={()=>{setObjDineroContext({...ObjdineroContext,dinero:0})}} 
    className="btn btn-success w-full mt-2">Gastar</button>

    {/* <button onClick={()=>{setObjDinero({...Objdinero,dinero:0})}} 
    className="btn btn-success w-full mt-2">Gastar</button> */}
    </>
  )
}

export default Hijo