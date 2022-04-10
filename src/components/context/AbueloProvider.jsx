import { createContext } from "react";
import { useState } from "react";


const AbueloContext = createContext()


const AbueloProvider = ({children}) => 
{

    const [ObjdineroContext, setObjDineroContext] = useState({
        detalle:"Play Station",
        dinero:10000
      })

    return (
        <AbueloContext.Provider value={{
            ObjdineroContext,
            setObjDineroContext
        }}>
        {children}
        </AbueloContext.Provider>
    )
}

export {
    AbueloProvider
}

export default AbueloContext

