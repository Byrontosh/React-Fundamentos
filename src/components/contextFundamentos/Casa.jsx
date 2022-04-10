import React from 'react'
import { AbueloProvider } from '../context/AbueloProvider'
import Abuelo from './Abuelo'


const Casa = () => 
{
  return (
    <AbueloProvider>
      <div className='bg-yellow-50 h-full border-1 border-slate-400 shadow-2xl'>
          <p className='text-center mt-3 text-2xl'>¡Yo soy la casa!</p>
          <h1 className='font-bold text-2xl'>💡 Importante:</h1>
          <ul className='list-decimal m-4'>
            <li className='text-lg'>Paso de información entre componente por props es válido siempre y cuando se tengan pocos componentes en un proyecto </li>
            <li className='text-lg'>El uso de hook useContext es válido cuando en el proyecto se tengan varios componentes y que la información sea compartida lo más rápida posible. </li>
          </ul>
          <div className='flex justify-evenly items-center h-5/6 '>
              <div className='bg-lime-100 w-full h-96 m-2 border-2 border-slate-800 font-bold'>
                  <Abuelo/>
              </div>
          </div>
      </div>
    </AbueloProvider>
  )
}

export default Casa