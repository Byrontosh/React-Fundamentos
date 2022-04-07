import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useFetch} from '../hooks/useFetch'
import CustomHookUser from './CustomHookUser'

const CustomHooks = () => 
{
    const {estado, data} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")

    const [url, setUrl] = useState("")
    
    const [spinner, setSpinner] = useState(false)
    
    useEffect(() => 
    {
      
      if(url)
      {
        setTimeout(() => {
          setSpinner(false)
        }, 2000);
      }

    }, [spinner])

    const handleCambio =() =>
    {
      setUrl("https://jsonplaceholder.typicode.com/users")
      setSpinner(true)
    }



  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-4 text-2xl">Custom Hooks 🐱‍👤🐺</h1>
        <hr />
        <div className="text-center">
        <button className="btn btn-success mt-3" onClick={handleCambio}>Consultar API</button>
        </div>
        {
              <div className="container mt-2">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  {
                      estado && data?.map((r,key)=>(
                        <p key={r.name}>{key +1} - {r.name}</p>
                      ))
                  }
                </div>
                <div className="col-sm-6 col-md-6 text-left mt-2">
                  {
                    spinner 
                    ? <div className="alert alert-success text-center" role="alert"> Cargando datos espere...</div>
                    : <CustomHookUser url={url} spinner={spinner}/>
                  }
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default CustomHooks