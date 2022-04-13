import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MostrarPaciente = () => 
{
  const {id} = useParams()
  const [url, setURL] = useState(id)
  const [paciente, setPaciente] = useState({})

  useEffect(() => 
  {
        const consultarPaciente = async() => {
          try 
          {
            const peticion = await fetch(`http://localhost:4000/pacientes/${url}`)
            const respuesta = await peticion.json()
            if(url == respuesta.id)
            {
              setPaciente(respuesta)
            }
          } catch (error) 
          {
            console.log(error);
          }
      }
      consultarPaciente()
  }, [])
  

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Detalle del Paciente</h1>
      <hr className='mt-3'/>
      <p className='mt-3'>Módulo para mostrar el detall completo de un paciente</p>
      {
        Object.keys(paciente).length > 0 ?
        (
          <div  className='m-5 flex justify-between'>
            <div>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Nombre del paciente: </span>
                    {paciente.nombre}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Nombre del propietario: </span>
                    {paciente.propietario}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Email: </span>
                    {paciente.email}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Fecha de atención: </span>
                    {paciente.fecha}
                </p>
                <p className="text-2xl text-gray-00 mt-4">
                    <span className="text-gray-600 uppercase font-bold">* Síntomas: </span>
                    {paciente.sintomas}
                </p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/2138/2138440.png" alt="dogandcat" className='h-80 w-80'  />
            </div>
          </div>
        )
        :
        (
          <p className="bg-red-900 border-t border-b border-red-900 text-white px-4 py-3 m-5 text-center rounded-lg">No existe los datos de ese paciente</p>
        )
      }
    </div>
  )
}

export default MostrarPaciente