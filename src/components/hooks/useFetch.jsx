import { useState } from "react"
import { useEffect } from "react"

export const useFetch = (url) => 
{

    const [estado, setEstado] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => 
    {
        const pokeApi = async (url) => 
        {
            try 
            {
                const res = await fetch(url);
                if(!res.ok)
                {   console.log("eror")
                    throw {err:true,status:res.status,statusText:!res.statusText ? "Ocurrio un error" : res.statusText}
                }
                const data = await res.json();
                setEstado(true)
                const response = data.results
                if(response)
                {
                    setData(response)
                    setError({err:false})                   
                }
                else {
                    setData(data)
                    setError({err:false})
                }
            } catch (error) 
            {
                setEstado(true)
                setError(error)
            }
        }

        pokeApi(url)
        
    }, [url])
    
    return{
        estado,
        data,
        error
      }
}
