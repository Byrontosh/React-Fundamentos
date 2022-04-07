import {useFetch} from '../hooks/useFetch'

const CustomHookUser = ({url,spinner}) => 
{

  const {data, error} = useFetch(url)

  return (
    <>

    {error?.err && <div className="alert alert-danger" role="alert"> No se obtuvieron los datos</div>}

     {
        spinner ? "": data?.map((r,key)=>(
            <p key={r.name}>{key +1} - {r.name}</p>
        ))
    }
    </>
  )
}

export default CustomHookUser